const bcrypt = require('bcrypt')
const { Customer, Role } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { name, email, password } = request.body

        if (!name || !email || !password) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Invalid input'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const existingCustomer = await Customer.findOne({
            where: {
                email
            }
        })

        if (existingCustomer) {
            return response.status(409).json({
                code: 409,
                status: 'failed',
                message: 'This email is already being used by another' 
            })
        }

        const customerRole = await Role.findOne({
            where: {
                roleName: 'customer'
            },
            attributes: ['roleId']  
        })

        const customer = await Customer.create({
            username: name,
            email,
            password: hashedPassword,
            roleId: customerRole.roleId
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: customer
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