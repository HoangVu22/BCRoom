require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongodb = require('./connection/mongodb')

const v1 = require('./api/v1')

const app = express()
const httpServer = http.createServer(app)
const port = process.env.SERVER_PORT || 1234

// view engine
app.set('view engine', 'ejs')
app.set('views', process.cwd() + '/views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bcroom_secret',
    cookie: {
        maxAge: 60000
    }
}))

app.all("*",  (req, res, next) =>{
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// connected app with api
v1(app)
app.get('/views', (request, response) => {
    response.render('success')
})
mongodb()

httpServer.listen(port, () => {
    console.log('Server is running at port ' + port)
})