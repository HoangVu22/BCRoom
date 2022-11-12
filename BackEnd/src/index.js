require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')

const app = express()
const httpServer = http.createServer(app)
const port = process.env.SERVER_PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

httpServer.listen(port, () => {
    console.log('Server is running at port ' + port)
})