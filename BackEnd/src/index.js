require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')

const v1 = require('./api/v1')
const upload = require('./helper/upload')

const app = express()
const httpServer = http.createServer(app)
const port = process.env.SERVER_PORT || 1234

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// connected app with api
v1(app)

// upload file to firebase
upload(app)

httpServer.listen(port, () => {
    console.log('Server is running at port ' + port)
})