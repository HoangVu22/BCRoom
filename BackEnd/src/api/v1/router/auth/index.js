const router = require('express').Router()
const controllers = require('../../controller')

router.post('/login', controllers.login)
router.post('/register', controllers.register)

module.exports = {
    entry: '/auth',
    router
}