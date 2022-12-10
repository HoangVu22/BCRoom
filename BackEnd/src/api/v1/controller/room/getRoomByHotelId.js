const { Op } = require('sequelize');
const { Room, RoomRelatedService, Service, RoomType, Policy, CustomerViewedHotel, Hotel, Image } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const { hotelId } = request.params;
        const customerId = request.body.customerId;

        const viewed = await CustomerViewedHotel.findOne({
            where: {
                hotelId,
                customerId 
            }
        });

        if (!viewed) {
            if (customerId) {
                const hotel = await Hotel.findByPk(hotelId);
                await CustomerViewedHotel.create({
                    customerId,
                    hotelId
                })
                await Hotel.update({
                    viewNumber: parseInt(hotel.dataValues.viewNumber) + 1
                }, {
                    where: {
                        hotelId
                    }
                });
            }
        }

        const rooms = await Room.findAll({
            where: {
                hotelId,
                status: true,
            },
            include: [
                {
                    model: RoomRelatedService
                },
                {
                    model: Policy
                },
                {
                    model: Image
                }
            ]
        });

        let result = [];
        async function getServiceInRoom () {
            for (const room of rooms) {
                const services = await Promise.all(room.RoomRelatedServices.map(async record => await Service.findByPk(record.serviceId)));

                const roomType = await RoomType.findByPk(room.typeId);

                delete room.dataValues.RoomRelatedServices;
                delete room.dataValues.typeId;

                result.push({
                    ...room.dataValues,
                    roomType,
                    services
                });
            }
        }

        await getServiceInRoom();

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result
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