const { Customer, Hotel } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId;
        const { targetCustomerId, status } = request.body;

        if (status !== null) {
            await Customer.update({
                status
            }, {
                where: {
                    customerId: targetCustomerId
                }
            });
        } else {
            const customer = await Customer.findByPk(targetCustomerId);
            await Customer.update({
                status: !customer.dataValues.status
            }, {
                where: {
                    customerId: targetCustomerId
                }
            });
        }

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Thay đổi trạng thái của người dùng'
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