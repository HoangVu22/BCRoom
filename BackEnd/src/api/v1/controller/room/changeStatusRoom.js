const { Room, Booking, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const roomId = request.params.roomId

        const room = await Room.findByPk(roomId)

        const booking = await Booking.findOne({
            where: {
                roomId: room.dataValues.roomId
            }
        })

        await Booking.update({
            status: !booking.dataValues.status
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
            status: !bill.dataValues.status 
        }, {
            where: {
                billId: bill.dataValues.billId
            }
        })

        await Room.update({
            status: !room.dataValues.status
        }, {
            where: {
                roomId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'failed',
            data: await Room.findByPk(roomId)
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