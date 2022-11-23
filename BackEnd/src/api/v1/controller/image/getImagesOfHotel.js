const { Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotelId = request.params.hotelId
        
        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Image.findAll({
                where: {
                    hotelId
                },
                attributes: ['imageId', 'hotelId', 'url']
            })
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