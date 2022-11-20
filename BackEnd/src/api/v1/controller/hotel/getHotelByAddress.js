const { Op } = require('sequelize');
const { Hotel } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        let { address } = request.params

        address = address.replaceAll('_', ' ')
        const hotels = await Hotel.findAll({
            where: {
                address: {
                    [Op.like]: '%' + address + '%'
                }
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