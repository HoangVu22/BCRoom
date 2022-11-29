const { Op } = require('sequelize');
const { Hotel, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        let { address } = request.params

        address = address.replaceAll('_', ' ')
        const hotels = await Hotel.findAll({
            where: {
                address: {
                    [Op.like]: '%' + address + '%'
                },
                status: true
            },
            include: {
                model: Image,
                limit: 1
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: hotels
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}