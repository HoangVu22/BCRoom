const { Booking } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId

        const booking = await Booking.findByPk(bookingId)

        await Booking.update({
            isPaid: !booking.isPaid
        }, {
            where: {
                bookingId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'changed is paid of booking'
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