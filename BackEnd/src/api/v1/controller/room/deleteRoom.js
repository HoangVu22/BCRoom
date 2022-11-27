const { Room, Image, RoomRelatedService, Booking, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const roomId = request.params.roomId
        const room = await Room.findByPk(roomId, {
            include: {
                model: Booking
            }
        })

        if (room.dataValues.Booking !== null) {
            await Bill.destroy({
                where: {
                    bookingId: room.dataValues.Booking.bookingId
                }
            })
        }

        await Promise.all([
            Image.destroy({
                where: {
                    roomId
                }
            }),
            RoomRelatedService.destroy({
                where: {
                    roomId
                }
            }),
            Booking.destroy({
                where: {
                    roomId
                }
            }),
            Room.destroy({
                where: {
                    roomId
                }
            })
        ])

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'delete room successfully'
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