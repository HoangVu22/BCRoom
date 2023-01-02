const { Customer } = require('../../models')

async function isLogin(request, response, next) {
    try {
        // const customerId = request.session.userId
        const customerId = request.body.customerId

        if (!customerId) {
            return response.status(401).json({
                code: 401,
                status: 'failed',
                message: 'Chưa đăng nhập'
            })
        }
        
        const customer = await Customer.findByPk(customerId)

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Không tìm thấy tài khoản'
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