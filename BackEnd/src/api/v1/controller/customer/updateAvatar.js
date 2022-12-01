const { Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { url, name } = request.body 
        const customerId = request.body.customerId

        await Image.destroy({
            where: {
                customerId
            }
        })

        const avatarCreated = await Image.create({
            customerId,
            url,
            imageName: name
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: avatarCreated
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