const { Review } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { hotelId, starNumber, content } = request.body
        const customerId = request.cookies.userId

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Review.create({
                hotelId,
                customerId,
                starNumber,
                content
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