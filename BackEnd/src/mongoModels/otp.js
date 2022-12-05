const mongoose = require('mongoose')

const otp = new mongoose.Schema({
    otp: {
        type: String,
        require: true
    },
    customerId: {
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

module.exports = mongoose.model('Otp', otp)