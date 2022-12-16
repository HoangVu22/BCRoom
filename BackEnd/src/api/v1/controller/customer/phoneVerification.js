const { Customer } = require('../../../../../models')
const sendSMS = require('../../../../helper/sendSMS')
const otpGenerator = require('otp-generator')
const { otpPhoneVerification } = require('../../../../mongoModels')
const { phoneVerification } = require('../../../../constant/smsContent')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const phone = request.body.phone

        const customer = await Customer.findOne({
            where: {
                phone
            }
        })
        
        if (customer) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Số điện thoại này đã được liên kiết với một tài khoản khác'
            })
        }

        const VNPhone = '+84' + phone.slice(1)

        const otpCode = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false
        })

        const otpPhoneVerificationObject = new otpPhoneVerification({
            otp: otpCode,
            customerId,
            phone
        })
        await otpPhoneVerificationObject.save()

        const smsContent = phoneVerification(otpCode)

        sendSMS(VNPhone, smsContent)

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Đã gửi otp xác thực đến số điện thoại ' + VNPhone
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