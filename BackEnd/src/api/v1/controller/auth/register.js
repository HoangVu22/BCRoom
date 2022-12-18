const bcrypt = require('bcrypt');
const { Customer, Role } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const { name, email, password, address, roleId } = request.body;

        if (!name || !email || !password) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Invalid input'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const existingCustomer = await Customer.findOne({
            where: {
                email
            }
        });

        if (existingCustomer) {
            return response.status(409).json({
                code: 409,
                status: 'failed',
                message: 'Email đã tồn tại'
            });
        }

        let createValues = {};

        createValues.username = name;
        createValues.password = hashedPassword;
        createValues.email = email;

        if (address) {
            createValues.address = address;
        }

        if (roleId) {
            createValues.roleId = roleId;
        } else {
            const customerRole = await Role.findOne({
                where: {
                    roleName: 'customer'
                },
                attributes: ['roleId']
            });
            createValues.roleId = customerRole.roleId
        }

        const customer = await Customer.create(createValues);

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: customer
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
};