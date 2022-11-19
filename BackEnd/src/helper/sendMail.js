const { 
    myOAuth2Client, 
    emailAdmin,
    GOOGLE_MAILER_CLIENT_ID,
    GOOGLE_MAILER_CLIENT_SECRET,
    GOOGLE_MAILER_REFRESH_TOKEN
} = require('../connection/oauth2google')
const nodemailer = require('nodemailer')

async function sendMail(toEmail, subject, content) {
    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    const myAccessToken = myAccessTokenObject?.token

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: emailAdmin,
            clientId: GOOGLE_MAILER_CLIENT_ID,
            clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
            refreshToken: GOOGLE_MAILER_REFRESH_TOKEN,
            accessToken: myAccessToken 
        }
    })

    const mailOptions = {
        to: toEmail,
        subject,
        html: content 
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendMail