const { Customer } = require('../../../../../models')
const { otp } = require('../../../../mongoModels')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    try {
        const phone = request.query.phone
        const otpConfirm = request.query.otp
        
        const customer = await Customer.findOne({
            where: {
                phone
            }
        })

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'customer not found'
            })
        }

        const otpObject = await otp.findOne({
            customerId: customer.customerId,
            otp: otpConfirm
        })

        if (!otpObject) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'OTP đã hết hạn'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(otpObject.password, salt)
        await Customer.update({
            password: hashedPassword 
        }, {
            where: {
                customerId: customer.customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Khôi phục mật khẩu thành công'
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