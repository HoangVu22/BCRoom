const bcrypt = require('bcrypt')
const { Customer, Image, Role }= require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { email, password } = request.body
        
        const customer = await Customer.findOne({
            where: {
                email
            },
            include: {
                model: Role
            }
        })

        if (customer.Role.roleName !== 'admin') {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Tài khoản không phải là admin'
            })
        }

        delete customer.dataValues.Role
        
        const avatar = await Image.findOne({
            where: {
                customerId: customer.customerId
            }
        })

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'email or password is incorrect'
            })
        }
        
        const comparePassword = await bcrypt.compare(password, customer.password)
        
        if (!comparePassword) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'email or password is incorrect'
            })
        }
        
        request.session.userId = customer.customerId
        
        return response.status(200).json({
            code: 200,
            status: 'success',
            data: {
                ...customer.dataValues,
                avatarUrl: avatar && avatar.url
            } 
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