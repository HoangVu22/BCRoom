const { Customer } = require('../../../../../models')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const password = request.body.password
        const oldPassword = request.body.oldPassword
        
        const customer = await Customer.findByPk(customerId)

        const comparePassword = await bcrypt.compare(oldPassword, customer.password)

        if (!comparePassword) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Mật khẩu cũ không chính xác'
            })
        }

        const compareNewVsOldPassword = await bcrypt.compare(password, customer.password)

        if (compareNewVsOldPassword) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Mật khẩu này đang được sử dụng'
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
            message: 'Thay đổi mật khẩu thành công'
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