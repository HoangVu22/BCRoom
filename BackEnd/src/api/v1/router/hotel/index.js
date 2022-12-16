const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả khách sạn bằng địa chỉ
router.get('/:address', controllers.getHotelsByAddress)

// đếm số lượng khách sạn có trong những địa chỉ được gửi từ client
router.post('/count', controllers.countHotelsByAddress)

// lấy thông tin của khách sạn theo id
router.get('/get_by_id/:hotelId', controllers.getHotelById)

// delete khách sạn theo id
router.delete('/single/:hotelId', controllers.deleteHotel)

// thay đổi trạng thái của khách sạn theo id
router.post('/change_status/:hotelId', controllers.changeStatusHotel)

// lấy dữ liệu tất cả khách sạn theo star number
router.get('', controllers.getHotelsByStar)

module.exports = {
    entry: '/hotels',
    router
}