const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin, isBookingClient } = require('../../../../middleware')

router.post('/update_profile', isLogin, controllers.updateProfile)
router.post('/update_avatar', isLogin, controllers.updateAvatar)
router.put('/password_recovery/:email', controllers.passwordRecovery)
router.put('/password_recovery_with_otp', controllers.passwordRecoveryWithOtp)
router.post('/booking_history', isLogin, controllers.bookingHistory)
router.post('/cancel_booking_from_client/:bookingId', isLogin, isBookingClient, controllers.cancelBookingFromClient)

module.exports = {
    entry: '/customers',
    router
}