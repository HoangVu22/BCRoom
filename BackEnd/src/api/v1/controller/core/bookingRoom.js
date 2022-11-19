const { Booking, Hotel, Room } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.cookies.userId
        const { roomId, dateFrom, dateTo, kidNumber, adultNumber } = request.body

        if (Date.parse(dateTo) - Date.parse(dateFrom) < 0) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'dateTo must be greater than or equal to dateFrom'
            })
        }

        const hotel = await Hotel.findOne({
            include: {
                model: Room,
                where: {
                    roomId
                }
            },
            attributes: ['hotelName']
        })

        if (hotel.Rooms[0].isBooking) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'This room is already booking by another'
            })
        }

        const booking = await Booking.create({
            roomId,
            customerId,
            hotelName: hotel.hotelName,
            dateFrom,
            dateTo,
            kidNumber,
            adultNumber
        })

        await Room.update({
            isBooking: true
        }, {
            where: {
                roomId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: booking
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