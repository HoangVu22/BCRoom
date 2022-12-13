const querystring = require('qs');
const crypto = require("crypto");     
const config = require('config');
const sortObject = require('../../../../helper/sortObject')
const { Transaction, Booking, Customer } = require('../../../../../models')
const sendMail = require('../../../../helper/sendMail')
const { paymentConfirmation } = require('../../../../constant/mailContent')

module.exports = async (req, res) => {
    let vnp_Params = req.query;
    const secureHash = vnp_Params['vnp_SecureHash'];
    const bookingId = vnp_Params['bookingId']
    const customerId = vnp_Params['customerId']

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];
    delete vnp_Params['bookingId']
    delete vnp_Params['customerId']

    vnp_Params = sortObject(vnp_Params)

    const secretKey = config.get('vnp_HashSecret');
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");     

    console.log('------- secure', secureHash)
    console.log('------- signed', signed)
    if(secureHash === signed){
        const orderId = vnp_Params['vnp_TxnRef'];
        const rspCode = vnp_Params['vnp_ResponseCode'];
        //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        const transaction = await Transaction.findOne({
            where: {
                bankTranNo: vnp_Params['vnp_BankTranNo'],
                tmnCode: vnp_Params['vnp_TmnCode'],
                transactionNo: vnp_Params['vnp_TransactionNo'],
                txnRef: vnp_Params['vnp_TxnRef']
            }
        })

        if (!transaction) {
            return res.status(200).json({
                RspCode: '91',
                Message: 'Fail checksum'
            })
        }

        await Transaction.update({
            bookingId,
            customerId
        }, {
            where: {
                transactionId: transaction.transactionId
            }
        })

        const booking = await Booking.findByPk(bookingId)

        if (!booking) {
            return res.status(200).json({
                RspCode: '91',
                Message: 'Fail checksum'
            })
        }
        
        await Booking.update({
            isPaid: true
        }, {
            where: {
                bookingId
            }
        })

        const customer = await Customer.findByPk(customerId)

        if (!customer) {
            return res.status(200).json({
                RspCode: '91',
                Message: 'Fail checksum'
            })
        }

        const paymentConfirmationContent = paymentConfirmation(customer.email, customer.username, bookingId)
        await sendMail(customer.email, 'Xác nhận thanh toán', paymentConfirmationContent)

        res.status(200).json({RspCode: '00', Message: 'success'})
    }
    else {
        res.status(200).json({RspCode: '97', Message: 'Fail checksum'})
    }
};