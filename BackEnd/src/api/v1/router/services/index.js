const router = require('express').Router()
const controllers = require('../../controller')

router.get('/all_services', controllers.getAllServices)

module.exports = {
    entry: '/services',
    router
}