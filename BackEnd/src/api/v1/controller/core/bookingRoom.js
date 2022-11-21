const { Booking, Hotel, Room, Bill, Customer } = require('../../../../../models');
const sendMail = require('../../../../helper/sendMail');
const { bill: billContent } = require('../../../../constant/mailContent');

module.exports = async (request, response) => {
    try {
        const customerId = request.session.userId
        const { roomId, dateFrom, dateTo, kidNumber, adultNumber } = request.body;

        if (Date.parse(dateTo) - Date.parse(dateFrom) < 0) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'dateTo must be greater than or equal to dateFrom'
            });
        }

        const hotel = await Hotel.findOne({
            include: {
                model: Room,
                where: {
                    roomId
                }
            },
            attributes: ['hotelName', 'address']
        });

        if (hotel.Rooms[0].isBooking) {
            return response.status(403).json({
                code: 403,
                status: 'failed',
                message: 'This room is already booking by another'
            });
        }

        const booking = await Booking.create({
            roomId,
            customerId,
            hotelName: hotel.hotelName,
            dateFrom,
            dateTo,
            kidNumber,
            adultNumber
        });

        await Room.update({
            isBooking: true
        }, {
            where: {
                roomId
            }
        });

        const getCurrentTime = () => {
            const date = new Date();
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        };

        const totalPriceForBill = parseFloat(hotel.Rooms[0].price) * Math.abs(Date.parse(dateTo) - Date.parse(dateFrom)) / (1000 * 60 * 60 * 24) + parseFloat(hotel.Rooms[0].price) 

        const bill = await Bill.create({
            bookingId: booking.bookingId,
            totalPrice: totalPriceForBill, 
            billDate: getCurrentTime()
        });

        const customer = await Customer.findByPk(customerId);

        const mailContent = billContent(
            customer.username,
            bill.billDate,
            hotel.Rooms[0].roomNumber,
            hotel.hotelName,
            hotel.address,
            booking.dateFrom,
            booking.dateTo,
            booking.kidNumber,
            booking.adultNumber,
            hotel.Rooms[0].price);

        await sendMail(customer.email, 'Booking Bill', mailContent);

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Thank for your booking, please check mail to know more'
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
};