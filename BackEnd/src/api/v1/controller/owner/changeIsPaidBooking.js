const { Booking, Room, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId
        const isPaid = request.body.isPaid

        const booking = await Booking.findByPk(bookingId)

        await Booking.update({
            isPaid 
        }, {
            where: {
                bookingId
            }
        })

        await Room.update({
            isBooking: isPaid 
        }, {
            where: {
                roomId: booking.roomId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Thay đổi trạng thái đặt hàng của đơn đặt phòng'
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