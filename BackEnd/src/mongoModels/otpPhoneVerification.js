const mongoose = require('mongoose')

const otpPhoneVerification = new mongoose.Schema({
    otp: {
        type: String,
        require: true
    },
    customerId: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    expireAt: {
        type: Date,
        default: Date.now,
        expires: 60
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('OtpPhoneVerification', otpPhoneVerification)