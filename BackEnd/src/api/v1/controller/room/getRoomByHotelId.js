const { Room } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { hotelId } = request.params

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Room.findAll({
                where: {
                    hotelId
                }
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