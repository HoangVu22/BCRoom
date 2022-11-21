const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.post('/review_hotel', isLogin, controllers.reviewHotel)

module.exports = {
    entry: '/reviews',
    router
}