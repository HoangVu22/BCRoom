const { Booking, Customer, Room, Bill } = require('../../../../../models')
const sendMail = require('../../../../helper/sendMail')
const { cancleBill } = require('../../../../constant/mailContent')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId
        
        const booking = await Booking.findOne({
            where: {
                bookingId
            },
            include: {
                model: Customer
            }
        })

        const roomInBooking = await Room.findByPk(booking.dataValues.roomId)

        const mailContent = cancleBill(
            booking.dataValues.Customer.username,
            roomInBooking.dataValues.roomNumber,
            booking.dataValues.hotelName,
            booking.dataValues.dateFrom,
            booking.dataValues.dateTo
        )

        await sendMail(booking.dataValues.Customer.email, 'Cancle Booking Bill', mailContent)
        
        await Booking.update({
            status: false
        }, {
            where: {
                bookingId
            }
        })

        await Bill.update({
            status: false
        }, {
            where: {
                bookingId
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