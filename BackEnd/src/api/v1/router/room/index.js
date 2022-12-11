const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả phòng có trong khách sạn theo id của khách sạn
router.post('/by_hotel_id/:hotelId', controllers.getRoomByHotelId)

// delete phòng theo id của phòng
router.delete('/single/:roomId', controllers.deleteRoom)

// thay đổi trạng thái của phòng
router.post('/change_status/:roomId', controllers.changeStatusRoom)

module.exports = {
    entry: '/rooms',
    router
}