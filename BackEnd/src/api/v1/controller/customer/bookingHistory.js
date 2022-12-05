const { Booking, Bill, Room, RoomType } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId

        const bookings = await Booking.findAll({
            where: {
                customerId
            },
            include: [
                {
                    model: Bill
                },
                {
                    model: Room,
                    include: {
                        model: RoomType
                    }
                }
            ]
        })

        const bookingsMapped = bookings.map(booking => {
            return {
                bookingId: booking.bookingId,
                roomId: booking.roomId,
                customerId,
                hotelName: booking.hotelName,
                roomNumber: booking.Room.roomNumber,
                dateFrom: booking.dateFrom,
                dateTo: booking.dateTo,
                status: booking.status,
                totalPrice: booking.Bill.totalPrice,
                roomType: booking.Room.RoomType.typeName,
                isPaid: booking.isPaid
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: bookingsMapped 
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