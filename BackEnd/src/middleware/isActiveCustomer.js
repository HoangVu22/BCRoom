const { Customer } = require('../../models') 

module.exports = async (request, response, next) => {
    try {
        const customerId = request.body.customerId || request.params.customerId || request.query.customerId
        const email = request.body.email || request.params.email || request.query.email
        let customer

        if (customerId && email) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Redundant request value'
            })
        }

        if (customerId) {
            customer = await Customer.findByPk(customerId)
        }

        if (email) {
            customer = await Customer.findOne({
                where: {
                    email
                }
            })
        }

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Không tìm thấy tài khoản'
            })
        }

        if (!customer.status) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Tài khoản này đã bị khóa' 
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