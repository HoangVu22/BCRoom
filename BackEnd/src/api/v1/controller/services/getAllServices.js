const { Service } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Service.findAll()
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