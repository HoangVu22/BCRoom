const { Hotel, Booking, Room } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.query.customerId
        const hotelId = request.query.hotelId
        
        const hotel = await Hotel.findOne({
            where: {
                hotelId
            },
            include: {
                model: Room
            }
        })

        if (!hotel) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Không tìm thấy khách sạn'
            })
        }

        async function hasBooking() {
            let has = false

            for (const room of hotel.Rooms) {
                const booking = await Booking.findOne({
                    where: {
                        customerId,
                        roomId: room.roomId,
                        status: true,
                        isPaid: true
                    }
                })

                if (booking) {
                    has = true
                    break
                }
            }

            return has
        }

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await hasBooking()
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