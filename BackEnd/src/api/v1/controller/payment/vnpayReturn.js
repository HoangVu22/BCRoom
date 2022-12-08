const config = require('config')
const querystring = require('qs')
const crypto = require('crypto')

module.exports = async (request, response) => {
    try {
        let vnp_Params = request.query
        const secureHash = vnp_Params['vnp_SecureHash'] 

        delete vnp_Params['vnp_SecureHash']
        delete vnp_Params['vnp_SecureHashType']

        vnp_Params = Object.keys(vnp_Params).sort().reduce((prev, next) => {
            prev[next] = vnp_Params[next]
            return prev
        }, {})

        const tmnCode = config.get('vnp_TmnCode') 
        const secretKey = config.get('vnp_HashSecret') 

        const signData = querystring.stringify(vnp_Params, { encode: false })
        const hmac = crypto.createHmac('sha512', secretKey)
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')

        if (secureHash === signed) {
            return response.status(200).json({
                code: vnp_Params['vnp_ResponseCode']
            })
        } else {
            return response.status(200).json({
                code: '97'
            })
        }
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}