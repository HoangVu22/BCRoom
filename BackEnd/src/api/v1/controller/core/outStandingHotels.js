const { Hotel, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const hotels = await Hotel.findAll({
            where: {
                status: true
            },
            order: [
                ['viewNumber', 'desc']
            ],
            limit: 8,
            include: {
                model: Image
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: hotels
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