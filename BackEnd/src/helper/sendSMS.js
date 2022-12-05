const twilioService = require('../connection/twilio')
const { twilioAdmin } = require('../config')

function sendSMS(to, content) {
    twilioService.messages.create({
        body: content,
        from: twilioAdmin.phoneNumber,
        to
    })
}

module.exports = sendSMS