const router = require('express').Router()
const controllers = require('../../controller')

router.get('/by_hotel_id/:hotelId', controllers.getRoomByHotelId)
router.delete('/single/:roomId', controllers.deleteRoom)

module.exports = {
    entry: '/rooms',
    router
}