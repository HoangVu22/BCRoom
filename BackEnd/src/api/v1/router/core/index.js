const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin }= require('../../../../middleware')

router.post('/new_room', isLogin, controllers.createNewRoomInHotel)
router.post('/booking', isLogin, controllers.bookingRoom)

module.exports = {
    entry: '/core',
    router
}