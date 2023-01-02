const { Customer, Role } = require('../../models');

async function isAdmin (request, response, next) {
    try {
        const customerId = request.body.customerId;

        if (!customerId) {
            return response.status(401).json({
                code: 401,
                status: 'failed',
                message: 'Chưa đăng nhập'
            })
        }

        const customer = await Customer.findOne({
            where: {
                customerId
            },
            include: {
                model: Role
            }
        });

        if (!customer) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Không tìm thấy tài khoản'
            });
        }

        if (customer.dataValues.Role.dataValues.roleName !== 'admin') {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Tài khoản không phải là admin'
            });
        }

        next();
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
}

module.exports = isAdmin;