const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin, isBookingHost } = require('../../../../middleware')

// lấy dữ liệu tất cả booking có trong khách sạn của chủ khách sạn
router.get('/:customerId/bookings_of_hotels', controllers.getAllBookingOfHotel)

// lấy dữ liệu tất cả khách sạn của chủ khách sạn
router.get('/:customerId/hotels', controllers.getAllOwnHotels)

// hủy booking của người dùng từ chủ khách sạn
router.post('/cancle_booking/:bookingId', isLogin, controllers.cancleBooking)

// cập nhật thông tin khách sạn
router.put('/update_hotel_information/:hotelId', isLogin, controllers.updateInformationHotel)

// cập nhật thông tin phòng
router.put('/update_room_information/:roomId', isLogin, controllers.updateInformationRoom)

// xác nhận người dùng đã thanh toán cho booking
router.put('/change_is_paid_booking/:bookingId', isLogin, isBookingHost, controllers.changeIsPaidBooking)

module.exports = {
    entry: '/owners',
    router
}