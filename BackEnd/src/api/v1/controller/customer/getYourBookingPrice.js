const { Booking, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId

        const booking = await Booking.findOne({
            where: {
                bookingId,
                status: true
            },
            include: {
                model: Bill,
                where: {
                    status: true
                },
                attributes: ['totalPrice']
            }
        })

        const price = booking.Bill.totalPrice

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: price 
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