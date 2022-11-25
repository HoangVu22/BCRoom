const router = require('express').Router()
const controllers = require('../../controller')

router.get('/:customerId/bookings_of_hotels', controllers.getAllBookingOfHotel)
router.get('/:customerId/hotels', controllers.getAllOwnHotels)

module.exports = {
    entry: '/owners',
    router
}