const router = require('express').Router()
const controllers = require('../../controller')

router.post('/create_payment_url', controllers.createPaymentURL)
router.get('/vnpay_ipn', controllers.vnpayIpn)
router.get('/vnpay_return', controllers.vnpayReturn)

module.exports = {
    entry: '/payment',
    router
}