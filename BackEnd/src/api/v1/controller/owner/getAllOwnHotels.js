const { Hotel, Room, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.params.customerId
        
        const hotels = await Hotel.findAll({
            where: {
                customerId,
                status: true
            },
            include: {
                model: Image,
                attributes: ['imageId', 'hotelId', 'url', 'imageName']
            },
            attributes: ['hotelId', 'customerId', 'hotelName', 'address', 'phone', 'starNumber']
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
                images: hotel.dataValues.Images,
                phone: hotel.phone,
                starNumber: hotel.starNumber,
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