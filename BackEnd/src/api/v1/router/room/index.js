const router = require('express').Router()
const controllers = require('../../controller')

router.get('/by_hotel_id', controllers.getRoomByHotelId)

module.exports = {
    entry: '/rooms',
    router
}