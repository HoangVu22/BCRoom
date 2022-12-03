const { Op } = require('sequelize');
const { Customer, Role, Image } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId;
        const nameLike = request.params.nameLike.replaceAll('_', ' ');

        const customers = await Customer.findAll({
            where: {
                username: {
                    [Op.like]: '%' + nameLike + '%'
                }
            },
            include: [
                {
                    model: Role,
                    attributes: ['roleName']
                },
                {
                    model: Image,
                    attributes: [
                        'url',
                        'imageName',
                        'customerId'
                    ]
                }
            ],
            attributes: [
                'customerId',
                'username',
                'email',
                'status'
            ]
        });

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: customers
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
};