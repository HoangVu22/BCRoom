const router = require('express').Router()
const controllers = require('../../controller')

router.get('/all_roles', controllers.getAllRoles)

module.exports = {
    entry: '/roles',
    router
}