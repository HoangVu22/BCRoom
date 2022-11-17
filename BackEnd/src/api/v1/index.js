// api v1
const authRouter = require('./router/auth')
const uploadRouter = require('./router/upload')
const hotelRouter = require('./router/hotel')
const coreRouter = require('./router/core')
const serviceRouter = require('./router/services')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'

    const routers = [authRouter, uploadRouter, hotelRouter, coreRouter, serviceRouter]

    routers.forEach(router => {
        app.use(rootApiEntryPoint + router.entry, router.router)
        console.log('server is ready to serve for ' + router.entry + ' api')
    })

    // app.use(rootApiEntryPoint + authRouter.entry, authRouter.router)
    // app.use(rootApiEntryPoint + uploadRouter.entry, uploadRouter.router)
    // app.use(rootApiEntryPoint + hotelRouter.entry, hotelRouter.router)
    // app.use(rootApiEntryPoint + coreRouter.entry, coreRouter.router)
    // app.use(rootApiEntryPoint + serviceRouter.entry, serviceRouter.router)
}