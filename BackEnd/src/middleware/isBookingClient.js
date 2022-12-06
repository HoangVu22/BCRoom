const { Booking } = require('../../models')

module.exports = async (request, response, next) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId

        const booking = await Booking.findByPk(bookingId)

        if (!booking) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'booking not found'
            })
        }

        if (booking.customerId !== customerId) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'you are not the one who booked this order'
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