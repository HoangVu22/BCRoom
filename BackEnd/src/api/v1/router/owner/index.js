const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin } = require('../../../../middleware')

router.get('/:customerId/bookings_of_hotels', controllers.getAllBookingOfHotel)
router.get('/:customerId/hotels', controllers.getAllOwnHotels)
router.post('/cancle_booking/:bookingId', isLogin, controllers.cancleBooking)

module.exports = {
    entry: '/owners',
    router
}