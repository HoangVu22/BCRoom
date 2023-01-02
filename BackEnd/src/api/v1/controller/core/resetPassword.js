const { Customer } = require('../../../../../models')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    try {
        const { password, customerId } = request.params

        const customer = await Customer.findOne({
            where: {
                customerId,
            }
        })

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'customer not found'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await Customer.update({
            password: hashedPassword
        }, {
            where: {
                customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Xác nhận đặt lại mật khẩu'
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