const router = require('express').Router()
const controllers = require('../../controller')
const { isAdmin } = require('../../../../middleware')

router.post('/count_user_register_in_year_with_month', isAdmin, controllers.countNewUserInYearWithMonth)
router.post('/count_booking_in_year_with_month', isAdmin, controllers.countNewBookingInYearWithMonth)

module.exports = {
    entry: '/admin',
    router
}