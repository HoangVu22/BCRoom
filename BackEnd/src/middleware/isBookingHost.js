const { Booking, Hotel, Room } = require('../../models')

module.exports = async (request, response, next) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId

        const booking = await Booking.findOne({
            where: {
                bookingId
            },
            include: {
                model: Room,
                include: {
                    model: Hotel
                }
            }
        })

        if (!booking) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: error
            })
        }

        if (booking.Room.Hotel.customerId !== customerId) {
            return response.status(405).json({
                code: 405,
                status: 'failed',
                message: 'Bạn không phải là chủ khách sạn'
            })
        }

        next()
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}