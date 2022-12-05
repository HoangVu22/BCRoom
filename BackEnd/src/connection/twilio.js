const twilio = require('twilio')
const config = require('../config')

const twilioService = twilio(config.twilioAdmin.accountSid, config.twilioAdmin.authToken)

module.exports = twilioService