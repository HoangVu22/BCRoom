const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả loại phòng có trong hệ thống
router.get('/all_roomtypes', controllers.getAllRoomTypes)

module.exports = {
    entry: '/roomtypes',
    router
}