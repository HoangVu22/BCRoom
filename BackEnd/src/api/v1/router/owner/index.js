const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin, isBookingHost } = require('../../../../middleware')

router.get('/:customerId/bookings_of_hotels', controllers.getAllBookingOfHotel)
router.get('/:customerId/hotels', controllers.getAllOwnHotels)
router.post('/cancle_booking/:bookingId', isLogin, controllers.cancleBooking)
router.put('/update_hotel_information/:hotelId', isLogin, controllers.updateInformationHotel)
router.put('/update_room_information/:roomId', isLogin, controllers.updateInformationRoom)
router.put('/change_is_paid_booking/:bookingId', isLogin, isBookingHost, controllers.changeIsPaidBooking)

module.exports = {
    entry: '/owners',
    router
}