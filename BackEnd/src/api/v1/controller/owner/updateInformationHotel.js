const { Hotel, Room, Booking } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const hotelId = request.params.hotelId
        
        const { hotelName, address, starNumber, phone, description } = request.body

        let updateValues = {}

        if (hotelName) {
            updateValues.hotelName = hotelName
        }

        if (address) {
            updateValues.address = address
        }

        if (starNumber) {
            updateValues.starNumber = starNumber
        }

        if (phone) {
            updateValues.phone = phone
        }

        if (description) {
            updateValues.description = description
        }

        await Hotel.update(updateValues, {
            where: {
                hotelId
            }
        })

        const updatedHotel = await Hotel.findOne({
            where: {
                hotelId
            },
            include: {
                model: Room,
                include: {
                    model: Booking
                }
            }
        })

        const roomsInHotel = updatedHotel.dataValues.Rooms

        await Promise.all(roomsInHotel.map(async room => {
            if (room.dataValues.Booking) {
                await Booking.update({
                    hotelName
                }, {
                    where: {
                        bookingId: room.Booking.bookingId
                    }
                })
            }
        })) 

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Hotel.findByPk(hotelId)
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