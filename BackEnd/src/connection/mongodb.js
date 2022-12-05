const mongoose = require('mongoose')
const { mongodb } = require('../config')

function connectionMongo() {
    mongoose.connect(mongodb.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to mongodb")
    })
}

module.exports = connectionMongo