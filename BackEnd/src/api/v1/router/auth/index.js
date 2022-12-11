const router = require('express').Router()
const controllers = require('../../controller')


// đăng nhập
router.post('/login', controllers.login)

// đăng ký
router.post('/register', controllers.register)

module.exports = {
    entry: '/auth',
    router
}