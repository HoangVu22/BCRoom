const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const firebase = require('../connection/firebase')

const upload = multer({
    storage: multer.memoryStorage()
})

module.exports = (app) => {
    app.post('/upload', upload.single('avatar'), async (request, response) => {
        try {
            if (!request.file) {
                return response.status(400).json({
                    status: 400,
                    message: "No include file at request"
                })
            }

            const blob = firebase.bucket.file(uuidv4() + '_' + request.file.originalname)
            const blobWriter = blob.createWriteStream({
                metadata: {
                    contentType: request.file.mimetype
                }
            })
            
            blobWriter.on('error', (error) => {
                console.log(error)
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

            blobWriter.end(request.file.buffer)
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                status: 500,
                message: error
            })
        }
    })
}