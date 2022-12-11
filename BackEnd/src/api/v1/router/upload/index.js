const router = require('express').Router()
const multer = require('multer')
const controllers = require('../../controller')

const upload = multer({
    storage: multer.memoryStorage() 
})

// upload thumbnail
router.post('/upload_thumbnail', upload.single('thumbnail'), controllers.uploadSingleFile)

// upload avatar
router.post('/upload_avatar', upload.single('avatar'), controllers.uploadSingleFile)

// remove thumbnail
router.post('/remove_thumbnail', controllers.removeSingleFile)

module.exports = {
    entry: '/upload',
    router
}