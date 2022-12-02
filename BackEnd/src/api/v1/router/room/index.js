const router = require('express').Router()
const controllers = require('../../controller')
// const { viewHotel } = require('../../../../middleware')

router.post('/by_hotel_id/:hotelId', controllers.getRoomByHotelId)
router.delete('/single/:roomId', controllers.deleteRoom)
router.post('/change_status/:roomId', controllers.changeStatusRoom)

module.exports = {
    entry: '/rooms',
    router
}