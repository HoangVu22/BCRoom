const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.post('/review_hotel', isLogin, controllers.reviewHotel)

router.get('/reviews_of_hotel/:hotelId', controllers.getReviewOfHotel)

module.exports = {
    entry: '/reviews',
    router
}