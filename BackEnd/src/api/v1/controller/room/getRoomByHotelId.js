const { Room, RoomRelatedService, Service, RoomType } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { hotelId } = request.params

        const rooms = await Room.findAll({
            where: {
                hotelId
            },
            include: {
                model: RoomRelatedService
            }
        })

        let result = []
        async function getServiceInRoom() {
            for (const room of rooms) {
                const services = await Promise.all(room.RoomRelatedServices.map(async record => await Service.findByPk(record.serviceId)))
                
                const roomType = await RoomType.findByPk(room.typeId) 

                delete room.dataValues.RoomRelatedServices
                delete room.dataValues.typeId

                result.push({
                    ...room.dataValues,
                    roomType,
                    services
                })
            }
        }

        await getServiceInRoom()

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result 
        })
    } catch (error) {
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}