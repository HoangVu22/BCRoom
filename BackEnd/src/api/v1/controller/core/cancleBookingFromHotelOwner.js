const { Booking } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const bookingId = request.params.bookingId
        const customerId = request.body.customerId

        const booking = await Booking.findByPk(bookingId)

        if (!booking) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'Booking not found'
            })
        }


    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}