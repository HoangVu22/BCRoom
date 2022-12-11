const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin, isBookingClient } = require('../../../../middleware')

// cập nhật profile của người dùng
router.post('/update_profile', isLogin, controllers.updateProfile)

// cập nhật avatar của nguời dùng
router.post('/update_avatar', isLogin, controllers.updateAvatar)

// xác nhận thay đổi mật khẩu của người dùng thông qua email
router.put('/password_recovery/:email', controllers.passwordRecovery)

// xác nhận thay đổi mật khẩu của người dùng thông qua otp
router.put('/password_recovery_with_otp', controllers.passwordRecoveryWithOtp)

// lấy dữ liệu tất cả booking của người dùng
router.post('/booking_history', isLogin, controllers.bookingHistory)

// người dùng hủy booking
router.post('/cancel_booking_from_client/:bookingId', isLogin, isBookingClient, controllers.cancelBookingFromClient)

module.exports = {
    entry: '/customers',
    router
}