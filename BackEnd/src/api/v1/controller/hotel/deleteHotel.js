const { Hotel, Room, Review, Booking, Bill, Image, Policy, RoomRelatedService } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotelId = request.params.hotelId
        const hotel = await Hotel.findByPk(hotelId)

        await Image.destroy({
            where: {
                hotelId
            }
        })

        await Review.destroy({
            where: {
                hotelId
            }
        })

        const rooms = await Room.findAll({
            where: {
                hotelId
            },
            include: {
                model: Booking
            }
        })
        
        if (rooms) {
            rooms.map(async room => {
                if (room.dataValues.Booking !== null) {
                    await Bill.destroy({
                        where: {
                            bookingId: room.dataValues.Booking.bookingId
                        }
                    })
        
                    await Booking.destroy({
                        where: {
                            roomId: room.dataValues.roomId
                        }
                    })
                }
    
                await Policy.destroy({
                    where: {
                        roomId: room.dataValues.roomId
                    }
                })
    
                await RoomRelatedService.destroy({
                    where: {
                        roomId: room.dataValues.roomId
                    }
                })
    
                await Room.destroy({
                    where: {
                        roomId: room.dataValues.roomId
                    }
                })
            })
        }

        await Hotel.destroy({
            where: {
                hotelId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'delete hotel successfully'
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