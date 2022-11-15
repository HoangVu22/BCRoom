const router = require('express').Router()
const controllers = require('../../controller')

router.get('/new_room', controllers.createNewRoomInHotel)

module.exports = {
    entry: '/core',
    router
}