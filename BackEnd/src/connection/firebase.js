const admin = require('firebase-admin')
const config = require('../config')

admin.initializeApp({
    credential: admin.credential.cert(config.firebaseAdmin),
    storageBucket: 'gs://bcroom-11df2.appspot.com/'
})

module.exports = {
    storage: admin.storage(),
    bucket: admin.storage().bucket()
}