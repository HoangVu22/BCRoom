const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin }= require('../../../../middleware')

// tạo một khách sạn kèm với một phòng khởi tạo
router.post('/new_room', isLogin, controllers.createNewRoomInHotel)

// đặt phòng
router.post('/booking', isLogin, controllers.bookingRoom)

// reset password, và gửi link xác nhận về mail của người dùng
router.get('/reset_password/:password/customer/:customerId', controllers.resetPassword)

// lấy dữ liệu tất cả khách sạn có tên hoặc địa chỉ gần giống với input value
router.get('/search_hotel_by_address_or_name', controllers.searchHotelByAddressOrName)

// lấy những khách sạn nổi bật có lượt view cao nhất trong hệ thống
router.get('/outstanding_hotels', controllers.outStandingHotels)

// reset password, gửi otp xác nhận về số điện thoại 
router.put('/confirm_password_recovery_with_otp', controllers.confirmPasswordRecoveryWithOtp)

// lấy dữ liệu tất cả khách sạn có phòng phù hợp với số tiền của người dùng
router.get('/estimate_cost', controllers.estimateCost)

// xác nhận liên kết số điện thoại
router.put('/confirm_phone_verification', isLogin, controllers.confirmPhoneVerification)

module.exports = {
    entry: '/core',
    router
}