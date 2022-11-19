const router = require('express').Router()
const controllers = require('../../controller')

router.post('/new_room', controllers.createNewRoomInHotel)
router.post('/booking', controllers.bookingRoom)

module.exports = {
    entry: '/core',
    router
}