const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.post('/update_profile', isLogin, controllers.updateProfile)
router.post('/update_avatar', isLogin, controllers.updateAvatar)
router.put('/password_recovery/:email', controllers.passwordRecovery)
router.post('/booking_history', isLogin, controllers.bookingHistory)

module.exports = {
    entry: '/customers',
    router
}