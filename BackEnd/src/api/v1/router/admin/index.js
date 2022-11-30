const router = require('express').Router()
const controllers = require('../../controller')
const { isAdmin } = require('../../../../middleware')

router.post('/count_user_register_in_year_with_month', isAdmin, controllers.countNewUserInYearWithMonth)

module.exports = {
    entry: '/admin',
    router
}