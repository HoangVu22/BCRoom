const { Hotel, Room, Booking, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotelId = request.params.hotelId
        const requestStatus = request.body.status

        if (requestStatus === null) {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: 'Thiếu giá trị'
            })
        }

        const hotel = await Hotel.findByPk(hotelId)

        await Hotel.update({
            status: requestStatus 
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
                            status: requestStatus 
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
                            status: requestStatus 
                        }, {
                            where: {
                                billId: bill.dataValues.billId
                            }
                        }) 
                    }))
                }

                await Room.update({
                    status: requestStatus 
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