const { Op } = require('sequelize');
const { Hotel } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { address } = request.body

        let result = []
        
        async function getHotelByAddress() {
            for (const place of address) {
                const count = await Hotel.count({
                    where: {
                        address: {
                            [Op.like]: '%' + place + '%'
                        }
                    }
                })

                result.push({
                    place,
                    count
                })
            } 
        }
        await getHotelByAddress()

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result
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