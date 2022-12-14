const { Customer } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const { username, email, address, phone } = request.body
        const customerId = request.body.customerId

        let updateValues = {}

        if (username) updateValues.username = username
        if (email) updateValues.email = email
        if (address) updateValues.address = address
        if (phone) updateValues.phone = phone

        await Customer.update(updateValues, {
            where: {
                customerId
            }
        })

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: await Customer.findByPk(customerId),
            message: 'Cập nhật thông tin người dùng thành công'
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