const { Review, Customer, Image } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { hotelId } = request.params
        
        const reviews = await Review.findAll({
            where: {
                hotelId
            },
            include: {
                model: Customer,
                attributes: ['customerId', 'username'],
                include: {
                    model: Image,
                    attributes: ['url'] 
                }
            },
            attributes: [
                'reviewId', 
                'starNumber', 
                'content',
                'createdAt',
            ]
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: reviews
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