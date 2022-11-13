const bcrypt = require('bcrypt')
const { Customer }= require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { email, password } = request.body
       
        const customer = await Customer.findOne({
            where: {
                email
            }
        })

        if (!customer) {
            return response.status(404).json({
                status: 404,
                message: 'email or password is incorrect'
            })
        }

        const comparePassword = await bcrypt.compare(password, customer.password)

        if (!comparePassword) {
            return response.status(404).json({
                status: 404,
                message: 'email or password is incorrect'
            })
        }

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