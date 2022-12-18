const router = require('express').Router()
const controllers = require('../../controller')
const { isAdmin } = require('../../../../middleware')

// đếm số lượng user đã đăng ký trong năm, được phần chia bởi tháng
router.post('/count_user_register_in_year_with_month', isAdmin, controllers.countNewUserInYearWithMonth)

// đếm số lượng booking trong năm, được phân chia bởi tháng
router.post('/count_booking_in_year_with_month', isAdmin, controllers.countNewBookingInYearWithMonth)

// lấy dữ liệu tất cả customer có trong hệ thống
router.post('/all_customers', isAdmin, controllers.getAllCustomers)

// đổi trạng thái của customer, có thể disable hoặc active customer
router.put('/change_customer_status', isAdmin, controllers.changeCustomerStatus)

// lấy dữ liệu tất cả customer có tên gần giống với input value
router.post('/all_customers/by_name/:nameLike', isAdmin, controllers.getAllCustomerWithName)

// lấy dữ liệu tất cả khách sạn có trong hệ thống
router.post('/all_hotels', isAdmin, controllers.getAllHotels)

// cập nhật thông tin người dùng từ admin
router.put('/update_information', isAdmin, controllers.updateCustomerFromAdmin)

// thay đổi trạng thái của khách sạn, có thể disable hoặc active hotel
router.put('/change_hotel_status/:hotelId', isAdmin, controllers.changeStatusHotel)

module.exports = {
    entry: '/admin',
    router
}