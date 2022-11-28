const { Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.params.customerId 

        const avatar = await Image.findOne({
            where: {
                customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: avatar
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