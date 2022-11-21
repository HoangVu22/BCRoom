const router = require('express').Router()
const multer = require('multer')
const controllers = require('../../controller')

const upload = multer({
    storage: multer.memoryStorage() 
})

router.post('/upload_thumbnail', upload.single('thumbnail'), controllers.uploadSingleFile)
router.post('/remove_thumbnail', controllers.removeSingleFile)

module.exports = {
    entry: '/upload',
    router
}