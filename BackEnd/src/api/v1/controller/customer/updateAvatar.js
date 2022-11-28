const { Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const avatarUrl = request.body.avatarUrl
        const customerId = request.body.customerId

        await Image.destroy({
            where: {
                customerId
            }
        })

        const avatar = await Image.create({
            customerId,
            url: avatarUrl
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