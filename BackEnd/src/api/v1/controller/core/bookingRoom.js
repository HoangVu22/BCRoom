const { Booking, Hotel, Room, Bill, Customer } = require('../../../../../models');
const sendMail = require('../../../../helper/sendMail');
const { bill: billContent } = require('../../../../constant/mailContent');

module.exports = async (request, response) => {
    try {
        // const customerId = request.session.userId
        const customerId = request.body.customerId
        const { roomId, dateFrom, dateTo, kidNumber, adultNumber } = request.body;

        if (!roomId || !dateFrom || !dateTo || !kidNumber || !adultNumber) {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: 'Request bị thiếu dữ liệu'
            })
        }

        const now = new Date()
        const nowDateFormat = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
        if (Date.parse(nowDateFormat) > Date.parse(dateTo) || Date.parse(nowDateFormat) > Date.parse(dateFrom)) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Ngày đặt hoặc ngày trả không hợp lệ'
            })
        }

        if (Date.parse(dateTo) - Date.parse(dateFrom) < 0) {
            return response.status(422).json({
                code: 422,
                status: 'failed',
                message: 'Ngày trả phòng phải lớn hơn ngày đặt phòng'
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
                message: 'Phòng này đã được đặt bởi người khác'
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
            totalPriceForBill
        );

        await sendMail(customer.email, 'Booking Bill', mailContent);

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'Cảm ơn đã đặt phòng, Làm ơn hãy kiểm tra mail của bạn để biết thêm thông tin',
            data: booking.bookingId
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