const { Hotel, Room } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.params.customerId
        
        const hotels = await Hotel.findAll({
            where: {
                customerId
            },
            attributes: ['hotelId', 'customerId', 'hotelName', 'address']
        })

        const result = await Promise.all(hotels.map(async hotel => {
            const roomCount = await Room.count({
                where: {
                    hotelId: hotel.hotelId
                }
            })

            return {
                hotelId: hotel.hotelId,
                hotelName: hotel.hotelName,
                address: hotel.address,
                roomCount
            }
        }))

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