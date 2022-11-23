const router = require('express').Router()
const controllers = require('../../controller')

router.get('/images_of_hotel/:hotelId', controllers.getImagesOfHotel)

module.exports = {
    entry: '/images',
    router
}