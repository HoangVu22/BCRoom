const { Customer, Role } = require('../../models');

async function isAdmin (request, response, next) {
    try {
        const customerId = request.body.customerId;

        if (!customerId) {
            return response.status(401).json({
                code: 401,
                status: 'failed',
                message: 'you are not logged in'
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
                message: 'where did you get this id, no find customer with it'
            });
        }

        if (customer.dataValues.Role.dataValues.roleName !== 'admin') {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'you are not admin'
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