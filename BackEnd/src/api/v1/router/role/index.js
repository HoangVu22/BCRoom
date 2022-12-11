const router = require('express').Router()
const controllers = require('../../controller')

// lấy dữ liệu tất cả role có trong hệ thống
router.get('/all_roles', controllers.getAllRoles)

module.exports = {
    entry: '/roles',
    router
}