// api v1
const authRouter = require('./router/auth')
const uploadRouter = require('./router/upload')
const hotelRouter = require('./router/hotel')
const coreRouter = require('./router/core')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'

    app.use(rootApiEntryPoint + authRouter.entry, authRouter.router)
    app.use(rootApiEntryPoint + uploadRouter.entry, uploadRouter.router)
    app.use(rootApiEntryPoint + hotelRouter.entry, hotelRouter.router)
    app.use(rootApiEntryPoint + coreRouter.entry, coreRouter.router)
}