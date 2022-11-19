const { OAuth2Client } = require('google-auth-library')

const GOOGLE_MAILER_CLIENT_ID = process.env.OAUTH_CUSTOMER_ID
const GOOGLE_MAILER_CLIENT_SECRET = process.env.OAUTH_CUSTOMER_SECRET
const GOOGLE_MAILER_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN
const EMAIL_ADMIN = process.env.OAUTH_EMAIL_ADMIN

const myOAuth2Client = new OAuth2Client(GOOGLE_MAILER_CLIENT_ID, GOOGLE_MAILER_CLIENT_SECRET)

myOAuth2Client.setCredentials({
    refresh_token: GOOGLE_MAILER_REFRESH_TOKEN
})

module.exports = {
    myOAuth2Client,
    emailAdmin: EMAIL_ADMIN,
    GOOGLE_MAILER_CLIENT_ID,
    GOOGLE_MAILER_CLIENT_SECRET,
    GOOGLE_MAILER_REFRESH_TOKEN
} 