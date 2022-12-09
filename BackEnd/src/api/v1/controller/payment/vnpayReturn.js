const crypto = require("crypto");
const config = require('config');
const querystring = require('qs');
const sortObject = require('../../../../helper/sortObject')
const { Transaction } = require('../../../../../models')

module.exports = async (req, res) => {
    let vnp_Params = req.query;
    let vnp_Params_With_Secure = {}
    
    const secureHash = vnp_Params['vnp_SecureHash'];
    
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];
    
    vnp_Params = sortObject(vnp_Params)
    vnp_Params_With_Secure = vnp_Params
    
    const tmnCode = config.get('vnp_TmnCode');
    const secretKey = config.get('vnp_HashSecret');
    
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");
    
    if (secureHash === signed) {
        vnp_Params_With_Secure['vnp_SecureHash'] = secureHash
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        await Transaction.create({
            amount: vnp_Params['vnp_Amount'] / 100,
            bankCode: vnp_Params['vnp_BankCode'],
            bankTranNo: vnp_Params['vnp_BankTranNo'],
            cardType: vnp_Params['vnp_CardType'],
            orderInfo: vnp_Params['vnp_OrderInfo'],
            payDate: vnp_Params['vnp_PayDate'],
            responseCode: vnp_Params['vnp_ResponseCode'],
            tmnCode: vnp_Params['vnp_TmnCode'],
            transactionNo: vnp_Params['vnp_TransactionNo'],
            transactionStatus: vnp_Params['vnp_TransactionStatus'],
            txnRef: vnp_Params['vnp_TxnRef']
        })
        // res.render('success', { code: vnp_Params['vnp_ResponseCode'] });
        res.redirect('http://localhost:5500/FrontEnd/paymentStatus/success/index.html' + '?' + querystring.stringify(vnp_Params_With_Secure, { encode: false }) )
    } else {
        // res.render('success', { code: '97' });
        res.redirect('http://localhost:5500/FrontEnd/payment/index.html')
    }
};