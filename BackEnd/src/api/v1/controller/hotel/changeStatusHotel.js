const { Hotel, Room, Booking, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotelId = request.params.hotelId
        const hotel = await Hotel.findByPk(hotelId)

        await Hotel.update({
            status: !hotel.status
        }, {
            where: {
                hotelId
            }
        })

        const rooms = await Room.findAll({
            where: {
                hotelId
            }
        })

        if (rooms) {
            await Promise.all(rooms.map(async room => {
                const bookings = await Booking.findAll({
                    where: {
                        roomId: room.dataValues.roomId
                    }
                })

                if (bookings) {
                    await Promise.all(bookings.map(async booking => {
                        await Booking.update({
                            status: !booking.dataValues.status
                        }, {
                            where: {
                                bookingId: booking.dataValues.bookingId
                            }
                        })
        
                        const bill = await Bill.findOne({
                            where: {
                                bookingId: booking.dataValues.bookingId
                            }
                        })
        
                        await Bill.update({
                            status: !bill.dataValues.status 
                        }, {
                            where: {
                                billId: bill.dataValues.billId
                            }
                        }) 
                    }))
                }

                await Room.update({
                    status: !room.dataValues.status
                }, {
                    where: {
                        roomId: room.dataValues.roomId
                    }
                })
            }))
        }


        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Hotel.findByPk(hotelId)
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