const { Op } = require('sequelize');
const { Hotel, Image, Room } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        let { address } = request.params

        address = address.replaceAll('_', ' ')
        const hotels = await Hotel.findAll({
            where: {
                address: {
                    [Op.like]: '%' + address + '%'
                },
                status: true,
            },
            include: {
                model: Image,
                limit: 1,
                attributes: ['url', 'imageName', 'hotelId', 'imageId']
            }
        })

        const result = await Promise.all(hotels.map(async hotel => {
            const countRoomOfHotel = await Room.count({
                where: {
                    hotelId: hotel.hotelId
                }
            })

            const countRoomOfHotelNoBooking = await Room.count({
                where: {
                    hotelId: hotel.hotelId,
                    status: true,
                    isBooking: false 
                }
            })
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