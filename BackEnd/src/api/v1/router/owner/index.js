const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.get('/:customerId/bookings_of_hotels', controllers.getAllBookingOfHotel)
router.get('/:customerId/hotels', controllers.getAllOwnHotels)
router.post('/cancle_booking/:bookingId', isLogin, controllers.cancleBooking)
router.put('/update_hotel_information/:hotelId', isLogin, controllers.updateInformationHotel)

module.exports = {
    entry: '/owners',
    router
}