const { Customer, Hotel, Room, Booking, RoomType, Bill } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.params.customerId

        const result = await Hotel.findAll({
            where: {
                customerId
            },
            include: {
                model: Room,
                include: [{
                    model: Booking,
                    where: {
                        status: true
                    },
                    include: [{
                        model: Customer
                    }, {
                        model: Bill
                    }]
                }, {
                    model: RoomType
                }],
            }
        })

        const finalResultAfterProcess = result.reduce((prev, next) => {
            const splitedRooms = []
            const record = {
                hotelId: next.hotelId,
                hotelName: next.hotelName,
            }
            next.Rooms.forEach(room => {
                if (room.Booking !== null) {
                    splitedRooms.push({
                        ...record,
                        roomId: room.roomId,
                        roomNumber: room.roomNumber,
                        typeId: room.RoomType.typeId,
                        typeName: room.RoomType.typeName,
                        bookingId: room.Booking.bookingId,
                        status: room.Booking.status,
                        dateFrom: room.Booking.dateFrom,
                        dateTo: room.Booking.dateTo,
                        customerId: room.Booking.Customer.customerId,
                        username: room.Booking.Customer.username,
                        email: room.Booking.Customer.email,
                        address: room.Booking.Customer.address,
                        phone: room.Booking.Customer.phone,
                        billId: room.Booking.Bill.billId,
                        totalPrice: room.Booking.Bill.totalPrice
                    })
                }
            })
            return [...prev, ...splitedRooms]
        }, [])

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: finalResultAfterProcess 
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