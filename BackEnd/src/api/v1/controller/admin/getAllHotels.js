const { Hotel, Room, Customer } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotels = await Hotel.findAll({
            where: {
                status: true
            },
            include: {
                model: Customer
            }
        })

        const result = await Promise.all(hotels.map(async hotel => {
            const roomCount = await Room.count({
                where: {
                    hotelId: hotel.hotelId
                }
            })

            const hostName = hotel.Customer.username

            delete hotel.dataValues.Customer

            return {
                ...hotel.dataValues,
                roomCount,
                hostName
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