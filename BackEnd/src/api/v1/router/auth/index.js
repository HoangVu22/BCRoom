const router = require('express').Router()
const controllers = require('../../controller')
const { isActiveCustomer } = require('../../../../middleware')

// đăng nhập
router.post('/login', isActiveCustomer, controllers.login)

// đăng ký
router.post('/register', controllers.register)

// đăng nhập cho admin
router.post('/admin_login', isActiveCustomer, controllers.adminLogin)

module.exports = {
    entry: '/auth',
    router
}