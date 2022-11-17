const { RoomType } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        return response.status(200).json({
            status: 200,
            data: await RoomType.findAll()
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            status: 500,
            message: error
        }) 
    }
}