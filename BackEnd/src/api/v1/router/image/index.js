const router = require('express').Router()
const controllers = require('../../controller')

router.get('/images_of_hotel/:hotelId', controllers.getImagesOfHotel)
router.get('/images_of_room/:roomId', controllers.getImagesOfRoom)

module.exports = {
    entry: '/images',
    router
}