const { CustomerViewedHotel, Hotel } = require('../../models');

async function viewHotel (request, response, next) {
    try {
        const { hotelId } = request.params;
        const customerId = request.body.customerId;

        if (!customerId) {
            next();
        }

        const hotel = await Hotel.findByPk(hotelId);

        if (!hotel) {
            console.log('hotel not found')
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'hotel not found'
            });
        }

        const viewed = await CustomerViewedHotel.findOne({
            where: {
                hotelId,
                customerId
            }
        });

        if (viewed) {
            console.log('next')
            next();
        } else {
            console.log(next)
            await CustomerViewedHotel.create({
                customerId,
                hotelId
            });

            await Hotel.update({
                viewNumber: parseInt(hotel.dataValues.viewNumber) + 1
            }, {
                where: {
                    hotelId
                }
            });

            next();
        }
        next()
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
}

module.exports = viewHotel;