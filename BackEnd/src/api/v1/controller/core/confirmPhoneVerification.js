const { Customer } = require('../../../../../models')
const { otpPhoneVerification } = require('../../../../mongoModels')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const phone = request.body.phone
        const otp = request.body.otp

        if (!customerId || !phone || !otp) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Thiếu value trong request'
            })
        }

        const otpPhoneVerificationObject = await otpPhoneVerification.findOne({
            customerId,
            phone,
            otp
        })

        if (!otpPhoneVerificationObject) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'OTP đã hết hạn'
            })
        }

        await Customer.update({
            phone
        }, {
            where: {
                customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Đã liên kết số điện thoại thành công'
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