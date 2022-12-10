const { Role } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const roles = await Role.findAll()

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: roles
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