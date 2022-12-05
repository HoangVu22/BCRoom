const router = require('express').Router()
const controllers = require('../../controller')
const { isLogin }= require('../../../../middleware')

router.post('/new_room', isLogin, controllers.createNewRoomInHotel)
router.post('/booking', isLogin, controllers.bookingRoom)
router.get('/reset_password/:password/customer/:customerId', controllers.resetPassword)
router.get('/search_hotel_by_address_or_name', controllers.searchHotelByAddressOrName)
router.get('/outstanding_hotels', controllers.outStandingHotels)
router.put('/confirm_password_recovery_with_otp', controllers.confirmPasswordRecoveryWithOtp)

module.exports = {
    entry: '/core',
    router
}