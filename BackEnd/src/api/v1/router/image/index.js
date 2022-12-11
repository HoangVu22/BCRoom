const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả ảnh của khách sạn theo id của khách sạn
router.get('/images_of_hotel/:hotelId', controllers.getImagesOfHotel)

// lấy dữ liệu tất cả ảnh của phòng theo id của phòng
router.get('/images_of_room/:roomId', controllers.getImagesOfRoom)

// lấy dữ liệu avatar của người dùng
router.get('/avatar_of_customer/:customerId', controllers.getAvatarOfCustomer)

module.exports = {
    entry: '/images',
    router
}