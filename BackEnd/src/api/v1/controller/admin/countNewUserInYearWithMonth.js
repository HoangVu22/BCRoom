const { Customer } = require('../../../../../models')

module.exports = async (request, response) => {
    try {
        const customerId = request.body.customerId

        const customers = await Customer.findAll()

        if (!customers) {
            return response.status(404).json({
                code: 404,
                status: 'failed',
                message: 'no customers found'
            })
        }
        
        const currentYear = request.body.year
        // const currentYear = new Date().getFullYear()

        const customersRegistedInCurrentYear = customers.filter(customer => new Date(customer.dataValues.createdAt).getFullYear() === currentYear)

        const countCustomerRegistedWithMonth = customersRegistedInCurrentYear.reduce((prev, next) => {
            const month = new Date(next.dataValues.createdAt).getMonth()

            return {
                ...prev,
                [month]: prev[month] ? [...prev[month], next] : [next]
            }
        }, {})

        let result = []
        for (let i = 0; i < 12; i++) {
            if (countCustomerRegistedWithMonth[i]) {
                result[i] = countCustomerRegistedWithMonth[i].length
            } else {
                result[i] = 0
            }
        } 

        return response.status(200).json({
            code: 200,
            status: 'success',
            data: result 
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