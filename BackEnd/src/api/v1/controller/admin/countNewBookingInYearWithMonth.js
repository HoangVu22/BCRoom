const { Booking } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId

        const bookings = await Booking.findAll()

        if (!bookings) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'no bookings found'
            })
        }

        const currentYear = new Date().getFullYear()

        const bookingsInCurrentYear = bookings.filter(booking => new Date(booking.dataValues.createdAt).getFullYear() === currentYear)

        const countBookingWithMonth = bookingsInCurrentYear.reduce((prev, next) => {
            const month = new Date(next.dataValues.createdAt).getMonth()

            return {
                ...prev,
                [month]: prev[month] ? [...prev[month], next] : [next] 
            }
        }, {})

        let result = []
        for (let i = 0; i < 12; i++) {
            if (countBookingWithMonth[i]) {
                result[i] = countBookingWithMonth[i].length
            } else {
                result[i] = 0
            }
        }

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result
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