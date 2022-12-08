const crypto = require("crypto");
const config = require('config');
const querystring = require('qs');
const sortObject = require('../../../../helper/sortObject')

module.exports = (req, res) => {
    let vnp_Params = req.query;

    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params)

    const tmnCode = config.get('vnp_TmnCode');
    const secretKey = config.get('vnp_HashSecret');

    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

    if (secureHash === signed) {
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua

        res.render('success', { code: vnp_Params['vnp_ResponseCode'] });
    } else {
        res.render('success', { code: '97' });
    }
};