const { Customer } = require('../../../../../models');
const otpGenerator = require('otp-generator');
const { otp } = require('../../../../mongoModels');
const sendSMS = require('../../../../helper/sendSMS');
const { passwordOtp } = require('../../../../constant/smsContent');

module.exports = async (request, response) => {
    try {
        const phone = request.query.phone;

        const customer = await Customer.findOne({
            where: {
                phone
            }
        });

        const VNPhone = "+84" + phone.slice(1);

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'customer with this phone number not found'
            });
        }

        const otpCode = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false
        });

        const otpObject = new otp({
            otp: otpCode,
            customerId: customer.customerId
        });
        await otpObject.save()

        const randomPassword = 'bc' + Math.random().toString(36).substring(2, 10) + 'room';
        const smsContent = passwordOtp(randomPassword, otpCode);

        sendSMS(VNPhone, smsContent);

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: randomPassword,
            message: 'Kiểm tra tin nhắn trong số điện thoại của bạn để xác nhận'
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
};