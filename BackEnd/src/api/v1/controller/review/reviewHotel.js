const { Review, Customer, Image } = require('../../../../../models');

module.exports = async (request, response) => {
    try {
        const { hotelId, starNumber, content } = request.body;
        // const customerId = request.session.userId 
        const customerId = request.body.customerId;

        const review = await Review.create({
            hotelId,
            customerId,
            starNumber,
            content
        });

        const customer = await Customer.findByPk(customerId);
        const avatar = await Image.findOne({
            where: {
                customerId
            },
            attributes: ['url']
        });

        const result = {
            reviewId: review.reviewId,
            content: review.content,
            starNumber: review.starNumber,
            createdAt: review.createdAt,
            customerName: customer.username,
            avatar: avatar?.url 
        };

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        });
    }
};