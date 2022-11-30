const { Customer, Role } = require('../../models')

async function isAdmin(request, response, next) {
    try {
        const customerId = request.body.customerId

        const customer = await Customer.findOne({
            where: {
                customerId
            },
            include: {
                model: Role
            }
        })

        if (customer.dataValues.Role.dataValues.roleName !== 'admin') {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'you are not admin'
            })
        }

        next()
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}

module.exports = isAdmin