const {
    Hotel,
    Room,
    Policy,
    RoomRelatedService,
    Image
} = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const {
            hotelId,
            numberRoom,
            nameHotel,
            phone,
            starNumber,
            address,
            roomType,
            adultNumber,
            kidNumber,
            services,
            policy,
            images,
            price
        } = request.body;
        const { userId } = request.cookies;
        let hotel;

        if (hotelId) {
            hotel = await Hotel.findByPk(hotelId);
        } else {
            hotel = await Hotel.create({
                customerId: userId,
                hotelName: nameHotel,
                address,
                starNumber,
                phone
            });
        }

        if (images.imageHotel) {
            await Promise.all(images.imageHotel.map(async (image) => {
                await Image.create({
                    hotelId: hotel.hotelId,
                    url: image
                });
            }));
        }

        const newRoom = await Room.create({
            hotelId: hotel.hotelId,
            typeId: roomType,
            price,
            adultNumber,
            kidNumber,
            roomNumber: numberRoom
        });

        if (services) {
            await Promise.all(services.map(async (service) => {
                await RoomRelatedService.create({
                    roomId: newRoom.roomId,
                    serviceId: service
                });
            }));
        }

        await Policy.create({
            condition: policy.condition,
            expireTime: policy.expireTime
        });

        if (images.imageRoom) {
            await Promise.all(images.imageRoom.map(async (image) => {
                await Image.create({
                    roomId: newRoom.roomId,
                    url: image
                });
            }));
        }

        return response.status(200).json({
            status: 200,
            message: 'Success'
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            status: 500,
            message: error
        });
    }
};