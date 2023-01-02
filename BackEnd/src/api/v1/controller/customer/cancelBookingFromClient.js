const { Customer, Booking, Bill, Room, Hotel } = require('../../../../../models')
const { cancelBillFromClient } = require('../../../../constant/mailContent')
const sendMail = require('../../../../helper/sendMail')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const bookingId = request.params.bookingId
        const reasons = request.body.reasons
        
        const booking = await Booking.findOne({
            where: {
                bookingId
            },
            include: [
                {
                    model: Customer
                },
                {
                    model: Bill
                },
                {
                    model: Room
                }
            ]
        })

        if (booking.isPaid) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'Đơn đặt đã được thanh toán, không thể hủy'
            })
        }

        const roomOfHost = await Room.findOne({
            where: {
                roomId: booking.Room.roomId
            },
            include: {
                model: Hotel,
                include: {
                    model: Customer
                }
            }
        })

        const hostEmail = roomOfHost.Hotel.Customer.email

        const mailContent = cancelBillFromClient(
            booking.Bill.billId, 
            booking.Customer.username,
            booking.Room.roomNumber,
            booking.hotelName,
            booking.dateFrom,
            booking.dateTo,
            reasons
        )

        await sendMail(hostEmail, 'Khách hàng hủy đơn', mailContent)

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

        await Room.update({
            isBooking: false
        }, {
            where: {
                roomId: booking.Room.roomId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Hủy đơn đặt thành công'
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