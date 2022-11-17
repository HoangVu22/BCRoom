const router = require('express').Router()
const controllers = require('../../controller')

router.get('/all_roomtypes', controllers.getAllRoomTypes)

module.exports = {
    entry: '/roomtypes',
    router
}