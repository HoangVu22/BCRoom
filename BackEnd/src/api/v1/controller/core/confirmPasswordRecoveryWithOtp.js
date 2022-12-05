const { Customer } = require('../../../../../models')
const { otp } = require('../../../../mongoModels')

module.exports = async (request, response) => {
    try {
        const phone = request.query.phone
        const otpConfirm = request.query.otp
        const password = request.query.password
        
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
                message: 'otp is incorrect'
            })
        }

        await Customer.update({
            password
        }, {
            where: {
                customerId: customer.customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'password recovery successfully'
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