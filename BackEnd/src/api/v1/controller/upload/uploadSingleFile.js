const firebase = require('../../../../connection/firebase')
const { v4: uuidv4 } = require('uuid')
const upload = require('../../../../helper/upload')

module.exports = async (request, response) => {
    try {
        const { directory } = request.body
        const file = request.file

        if (!request.file) {
            return response.status(400).json({
                status: 400,
                message: 'No file included in request'
            })
        }

        const blob = firebase.bucket.file(directory + '/' + uuidv4() + '_' + file.originalname)
        const blobWriter = upload(directory, request.file)
        
        blobWriter.on('error', (error) => {
            return response.status(400).json({
                status: 400,
                message: error
            })
        })

        blobWriter.on('finish', () => {
            const publicUrl = 'https://storage.googleapis.com/' + firebase.bucket.name + '/' + blob.name
            return response.status(200).json({
                status: 200,
                data: {
                    publicUrl
                }
            })
        })

        blobWriter.end(file.buffer)
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: error
        }) 
    }
}