const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

// tạo review cho khách sạn
router.post('/review_hotel', isLogin, controllers.reviewHotel)

// lấy dữ liệu tất cả review của khách sạn theo id của khách sạn
router.get('/reviews_of_hotel/:hotelId', controllers.getReviewOfHotel)

module.exports = {
    entry: '/reviews',
    router
}