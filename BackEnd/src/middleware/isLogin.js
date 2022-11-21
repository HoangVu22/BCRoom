const { Customer } = require('../../models')

async function isLogin(request, response, next) {
    try {
        // const customerId = request.session.userId
        const customerId = request.body.customerId

        if (!customerId) {
            return response.status(401).json({
                code: 401,
                status: 'failed',
                message: 'you are not logged in'
            })
        }
        
        const customer = await Customer.findByPk(customerId)

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'where did you get this id, no find customer with it'
            })
        }

        next()
    } catch (error) {
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        })
    }
}

module.exports = isLogin