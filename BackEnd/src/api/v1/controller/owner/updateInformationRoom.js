const { Room, Images } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId
        const roomId = request.params.roomId
        const { typeId, description, price, adultNumber, kidNumber, roomNumber, images } = request.body

        const room = await Room.findByPk(roomId)
        if (!room) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'room not found'
            })
        }

        let updateValues = {}

        if (typeId) {
            updateValues.typeId = typeId
        }

        if (description) {
            updateValues.description = description
        }

        if (price) {
            updateValues.price = price
        }

        if (adultNumber) {
            updateValues.adultNumber = adultNumber
        }

        if (kidNumber) {
            updateValues.kidNumber = kidNumber
        }

        if (roomNumber) {
            updateValues.roomNumber = roomNumber
        }

        await Room.update(updateValues, {
            where: {
                roomId
            }
        })

        if (images) {
            await Image.destroy({
                where: {
                    roomId
                }
            })

            await Promise.all(images.map(async image => await Image.create({
                roomId,
                url: image.url,
                imageName: image.name
            })))
        }

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Room.findByPk(roomId)
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