const router = require('express').Router()
const multer = require('multer')
const controllers = require('../../controller')

const upload = multer({
    storage: multer.memoryStorage() 
})

router.post('/upload_avatar', upload.single('avatar'), controllers.uploadSingleFile)

module.exports = {
    entry: '/upload',
    router
}