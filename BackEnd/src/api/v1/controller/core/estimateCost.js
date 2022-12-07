const { Hotel, Room, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const cost = request.query.cost

        const hotels = await Hotel.findAll({
            where: {
                status: true
            },
            include: [
                {
                    model: Room,
                    where: {
                        isBooking: false,
                        status: true
                    }
                },
                {
                    model: Image,
                    limit: 1,
                    attributes: ['url', 'imageName', 'hotelId', 'imageId']
                }
            ]
        })

        let hotelsHasRoomMatchWithCost = [] 
        const hotelsHasRoom = hotels.filter(hotel => hotel.Rooms.length > 0)
        hotelsHasRoom.forEach(hotel => {
            for (const room of hotel.Rooms) {
                if (parseFloat(room.price) <= parseFloat(cost)) {
                    hotelsHasRoomMatchWithCost.push(hotel)
                    break;
                }
            }
        })

        const result = await Promise.all(hotelsHasRoomMatchWithCost.map(async hotel => {
            const countRoomOfHotel = await Room.count({
                where: {
                    hotelId: hotel.hotelId,
                    status: true
                }
            })
            
            const countRoomOfHotelNoBooking = await Room.count({
                where: {
                    hotelId: hotel.hotelId,
                    status: true,
                    isBooking: false
                }
            })

            delete hotel.dataValues.Rooms

            return {
                ...hotel.dataValues,
                totalRoom: countRoomOfHotel,
                totalNoBookingRoom: countRoomOfHotelNoBooking
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