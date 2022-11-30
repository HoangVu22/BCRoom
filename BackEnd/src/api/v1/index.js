// api v1
const authRouter = require('./router/auth')
const uploadRouter = require('./router/upload')
const hotelRouter = require('./router/hotel')
const coreRouter = require('./router/core')
const serviceRouter = require('./router/services')
const roomTypeRouter = require('./router/roomTypes')
const roomRouter = require('./router/room')
const reviewRouter = require('./router/review')
const imageRouter = require('./router/image')
const customerRouter = require('./router/customer')
const ownerRouter = require('./router/owner')
const adminRouter = require('./router/admin')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'

    const routers = [authRouter, uploadRouter, hotelRouter, coreRouter, serviceRouter, roomTypeRouter, roomRouter, reviewRouter, imageRouter, customerRouter, ownerRouter, adminRouter]

    routers.forEach(router => {
        app.use(rootApiEntryPoint + router.entry, router.router)
        console.log('server is ready to serve for ' + router.entry + ' api')
    })
}