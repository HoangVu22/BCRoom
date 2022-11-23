const { Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const roomId = request.params.roomId

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Image.findAll({
                where: {
                    roomId
                },
                attributes: ['imageId', 'roomId', 'url']
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