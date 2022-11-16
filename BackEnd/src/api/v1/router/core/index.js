const router = require('express').Router()
const controllers = require('../../controller')

router.post('/new_room', controllers.createNewRoomInHotel)

module.exports = {
    entry: '/core',
    router
}