const { Room, Booking, Bill } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const roomId = request.params.roomId;
        const statusRequest = request.body.status

        if (statusRequest === null) {
            return response.status(400).json({
                code: 400,
                status: 'failed',
                message: 'missing request value'
            })
        }

        const room = await Room.findByPk(roomId);

        const booking = await Booking.findOne({
            where: {
                roomId: room.dataValues.roomId
            }
        });

        if (booking) {
            await Booking.update({
                status: statusRequest 
            }, {
                where: {
                    bookingId: booking.dataValues.bookingId
                }
            });

            const bill = await Bill.findOne({
                where: {
                    bookingId: booking.dataValues.bookingId
                }
            });

            await Bill.update({
                status: statusRequest 
            }, {
                where: {
                    billId: bill.dataValues.billId
                }
            });
        }

        await Room.update({
            status: statusRequest 
        }, {
            where: {
                roomId
            }
        });

        return response.status(200).json({
            code: 200,
            status: 'failed',
            data: await Room.findByPk(roomId)
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