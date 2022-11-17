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

        const blob = firebase.bucket.file(directory + '/' + uuidv4() + '_' + file.originalname)
        const blobWriter = upload(directory, request.file)
        
        blobWriter.on('error', (error) => {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: error
            })
        })

        blobWriter.on('finish', () => {
            const publicUrl = 'https://storage.googleapis.com/' + firebase.bucket.name + '/' + blob.name
            return response.status(200).json({
                code: 200,
                status: 'success',
                data: {
                    publicUrl
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