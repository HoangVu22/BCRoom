const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.post('/update_profile', isLogin, controllers.updateProfile)

module.exports = {
    entry: '/customers',
    router
}