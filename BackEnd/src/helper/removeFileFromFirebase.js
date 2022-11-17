const firebase = require('../connection/firebase')

async function removeFileFromFirebase(filename) {
    await firebase.bucket.file(filename).delete()
}

module.exports = removeFileFromFirebase