const { Hotel, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { hotelId } = request.params
        
        const hotel = await Hotel.findByPk(hotelId)

        if (!hotel) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'hotel not found'
            })
        }

        const images = await Image.findAll({
            where: {
                hotelId
            },
            attributes: ['url', 'imageName', 'hotelId', 'imageId']
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: {
                ...hotel.dataValues,
                images
            } 
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