const bcrypt = require('bcrypt')
const { Customer } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { name, email, password } = request.body

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const existingCustomer = await Customer.findOne({
            where: {
                email
            }
        })

        if (existingCustomer) {
            return response.status(409).json({
                status: 409,
                message: 'This email is already being used by another' 
            })
        }

        const customer = await Customer.create({
            username: name,
            email,
            password: hashedPassword
        })

        return response.status(200).json({
            status: 200,
            data: customer
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            status: 500,
            message: error
        })
    }
}