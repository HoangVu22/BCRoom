const config = require('config')
const dateFormat = require('dateformat')
const querystring = require('qs')
const crypto = require('crypto')

module.exports = async (request, response) => {
    try {
        const { amount, bankCode, orderDescription: orderInfo, orderType, language: locale } = request.body
        const ipAddress = request.headers['x-forwarded-for'] ||
            request.connection.remoteAddress ||
            request.socket.remoteAddress ||
            request.connection.socket.remoteAddress
        const tmnCode = config.get('vnp_TmnCode')
        const secretKey = config.get('vnp_HashSecret')
        let vnpUrl = config.get('vnp_Url')
        const returnUrl = config.get('vnp_ReturnUrl')

        const date = new Date()

        const createDate = dateFormat(date, 'yyyymmddHHmmss')
        const orderId = dateFormat(date, 'HHmmss')

        if (locale === null || locale === "") {
            locale = 'vn'
        }
        
        const currCode = "VND"
        const vnp_Params = {}
        vnp_Params['vnp_Version'] = '2.1.0'
        vnp_Params['vnp_Command'] = 'pay'
        vnp_Params['vnp_TmnCode'] = tmnCode
        // vnp_Params['vnp_Merchant'] = ''
        vnp_Params['vnp_Locale'] = locale
        vnp_Params['vnp_CurrCode'] = currCode
        vnp_Params['vnp_TxnRef'] = orderId
        vnp_Params['vnp_OrderInfo'] = orderInfo
        vnp_Params['vnp_OrderType'] = orderType
        vnp_Params['vnp_Amount'] = amount * 100
        vnp_Params['vnp_ReturnUrl'] = returnUrl
        vnp_Params['vnp_IpAddr'] = ipAddress
        vnp_Params['vnp_CreateDate'] = createDate
        if (bankCode !== null && bankCode !== "") {
            vnp_Params['vnp_BankCode'] = bankCode
        }

        const signData = querystring.stringify(vnp_Params, { encode: false })
        const hmac = crypto.createHmac('sha512', secretKey)
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex')
        vnp_Params['vnp_SecureHash'] = signed
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false })

        return response.redirect(vnpUrl)
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}