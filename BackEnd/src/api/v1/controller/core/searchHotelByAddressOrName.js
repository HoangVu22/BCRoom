const { Op } = require('sequelize');
const { Hotel } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const value = request.query.q.replaceAll('_', ' ');

        const hotels = await Hotel.findAll({
            where: {
                [Op.or]: [
                    {
                        hotelName: {
                            [Op.like]: '%' + value + '%'
                        }
                    },
                    {
                        address: {
                            [Op.like]: '%' + value + '%'
                        }
                    }
                ]
            }
        });

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: hotels
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