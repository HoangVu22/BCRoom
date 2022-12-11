const router = require('express').Router()
const controllers = require('../../controller')

// tạo thông tin thanh toán vnpay và gửi tới hệ thông vnpay
router.post('/create_payment_url', controllers.createPaymentURL)

// hệ thống sử dụng thông tin được trả về từ hệ thông vnpay và cập nhật thông tin đơn hàng
router.get('/vnpay_ipn', controllers.vnpayIpn)

// hệ thống vnpay xác nhận thông tin và trả về cho hệ thống
router.get('/vnpay_return', controllers.vnpayReturn)

module.exports = {
    entry: '/payment',
    router
}