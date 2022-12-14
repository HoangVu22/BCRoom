const firebaseAdmin = {
  "type": process.env.FIREBASE_TYPE,
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDERE_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL 
}

const twilioAdmin = {
    "phoneNumber": process.env.TWILIO_PHONE_NUMBER,
    "accountSid": process.env.TWILIO_ACCOUNT_SID,
    "authToken": process.env.TWILIO_AUTH_TOKEN
}

const mongodb = {
    'connectionString': process.env.MONGODB_CONNECTION_STRING,
    'username': process.env.MONGODB_USERNAME,
    'password': process.env.MONGODB_PASSWORD
}

module.exports = {
    firebaseAdmin,
    twilioAdmin,
    mongodb
}