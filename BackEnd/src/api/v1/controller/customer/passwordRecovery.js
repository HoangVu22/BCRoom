const { Customer } = require('../../../../../models')
const { passwordRecovery } = require('../../../../constant/mailContent')
const sendMail = require('../../../../helper/sendMail')

module.exports = async (request, response) => {
    try {
        const email = request.params.email
        
        const customer = await Customer.findOne({
            where: {
                email
            }
        })

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'customer not found'
            })
        }

        const randomPassword = 'bc' + Math.random().toString(36).substring(2, 10) + 'room'

        const confirmLink = `http://localhost:${process.env.SERVER_PORT}/api/v1/core/reset_password/${randomPassword}/customer/${customer.dataValues.customerId}` 

        const mailContent = passwordRecovery(email, customer.username, randomPassword, confirmLink)

        await sendMail(email, 'Xác nhận đã mất mật khẩu', mailContent)

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Kiểm tra mail của bạn để xác nhận' 
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}