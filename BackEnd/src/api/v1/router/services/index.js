const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả dịch vụ có trong hệ thống
router.get('/all_services', controllers.getAllServices)

module.exports = {
    entry: '/services',
    router
}