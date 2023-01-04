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
            description,
            address,
            roomType,
            adultNumber,
            kidNumber,
            services,
            policy,
            images,
            price
        } = request.body;
        // const userId = request.session.userId
        const userId = request.body.customerId;
        let hotel;
        let matchPriceWithStar = true;

        function checkMatchPriceWithStar () {
            if (starNumber === 1 && (price < 150000 || price > 250000)) {
                matchPriceWithStar = false;
            }
            if (starNumber === 2 && (price < 250000 || price > 350000)) {
                matchPriceWithStar = false;
            }
            if (starNumber === 3 && (price < 350000 || price > 500000)) {
                matchPriceWithStar = false;
            }
        }

        if (hotelId) {
            hotel = await Hotel.findByPk(hotelId);
            checkMatchPriceWithStar(hotel.starNumber, price);
            if (!matchPriceWithStar) {
                return response.status(422).json({
                    code: 422,
                    status: 'failed',
                    message: 'Giá phòng không phù hợp'
                });
            }
        } else {
            checkMatchPriceWithStar(starNumber, price);
            if (!matchPriceWithStar) {
                return response.status(422).json({
                    code: 422,
                    status: 'failed',
                    message: 'Giá phòng không phù hợp'
                });
            }
            hotel = await Hotel.create({
                customerId: userId,
                hotelName: nameHotel,
                address,
                starNumber,
                phone,
                description
            });
        }

        if (images.imageHotel) {
            await Promise.all(images.imageHotel.map(async (image) => {
                await Image.create({
                    hotelId: hotel.hotelId,
                    url: image.url,
                    imageName: image.name
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
            roomId: newRoom.roomId,
            condition: policy.condition,
            expireTime: policy.expireTime
        });

        if (images.imageRoom) {
            await Promise.all(images.imageRoom.map(async (image) => {
                await Image.create({
                    roomId: newRoom.roomId,
                    url: image.url,
                    imageName: image.name
                });
            }));
        }

        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'create record successfully'
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