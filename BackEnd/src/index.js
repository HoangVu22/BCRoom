require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const httpServer = http.createServer(app)
const port = process.env.SERVER_PORT

httpServer.listen(port, () => {
    console.log('Server is running at port ' + port)
})