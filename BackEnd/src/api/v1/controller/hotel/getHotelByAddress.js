const { Hotel } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { address } = request.params
        const hotels = await Hotel.findAll({
            where: {
                address
            }
        })

        return response.status(200).json({
            status: 200,
            data: hotels
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            status: 500,
            message: error
        }) 
    }
}