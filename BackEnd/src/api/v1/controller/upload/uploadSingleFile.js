const firebase = require('../../../../connection/firebase')
const { v4: uuidv4 } = require('uuid')

module.exports = async (request, response) => {
    try {
        const { directory } = request.body
        const file = request.file

        if (!request.file) {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: 'No file included in request'
            })
        }
        
        const uuid = uuidv4()
        const blob = firebase.bucket.file(directory + '/' + uuid + '_' + file.originalname)
        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: file.mimetype,
                metadata: {
                    firebaseStorageDownloadTokens: uuid
                }
            }
        })
        
        blobWriter.on('error', (error) => {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: error
            })
        })

        blobWriter.on('finish', () => {
            const fileUrl = process.env.FIREBASE_FILE_DOMAIN + firebase.bucket.name + '/o/' + encodeURIComponent(blob.name) + '?alt=media&token=' + uuid
            return response.status(200).json({
                code: 200,
                status: 'success',
                data: {
                    fileUrl,
                    filename: directory + '/' + uuid + '_' + file.originalname 
                }
            })
        })

        blobWriter.end(file.buffer)
    } catch (error) {
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}