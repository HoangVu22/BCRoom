const { Customer } = require('../../../../../models')
const bcrypt = require('bcrypt')

module.exports = async (request, response) => {
    try {
        const targetCustomer = request.query.target
        const customerId = request.body.customerId
        const { username, roleId, password, address } = request.body

        const target = await Customer.findByPk(targetCustomer)

        if (!target) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'customer not found'
            })
        }

        let updateValues = {}

        if (username) {
            updateValues.username = username
        }

        if (roleId) {
            updateValues.roleId = roleId
        }

        if (password) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            updateValues.password = hashedPassword
        }

        if (address) {
            updateValues.address = address
        }

        await Customer.update(updateValues, {
            where: {
                customerId: targetCustomer
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Đã cập nhật thông tin của người dùng với id' + targetCustomer
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