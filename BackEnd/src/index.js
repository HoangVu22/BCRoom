require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const v1 = require('./api/v1')

const app = express()
const httpServer = http.createServer(app)
const port = process.env.SERVER_PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// connected app with api
v1(app)

httpServer.listen(port, () => {
    console.log('Server is running at port ' + port)
})