const router = require('express').Router()
const controllers = require('../../controller')
const { isAdmin } = require('../../../../middleware')

router.post('/count_user_register_in_year_with_month', isAdmin, controllers.countNewUserInYearWithMonth)
router.post('/count_booking_in_year_with_month', isAdmin, controllers.countNewBookingInYearWithMonth)
router.post('/all_customers', isAdmin, controllers.getAllCustomers)
router.put('/change_customer_status', isAdmin, controllers.changeCustomerStatus)
router.post('/all_customers/by_name/:nameLike', isAdmin, controllers.getAllCustomerWithName)

module.exports = {
    entry: '/admin',
    router
}