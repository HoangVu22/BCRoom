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

// lấy giá của booking của người dùng thông qua id
router.post('/your_booking_price/:bookingId', isBookingClient, controllers.getYourBookingPrice)

// thay đổi mật khẩu
router.put('/change_password', isLogin, controllers.changePassword)

// xác thực số điện thoại để liên kết với tài khoản
router.put('/phone_verification', isLogin, controllers.phoneVerification)

// kiểm tra người dùng đã đặt phòng của khách sạn hay chưa
router.get('/has_booking_room_of_hotel', controllers.hasBookingARoom)

module.exports = {
    entry: '/customers',
    router
}