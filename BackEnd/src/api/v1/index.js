// api v1
const authRouter = require('./router/auth')
const uploadRouter = require('./router/upload')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'

    app.use(rootApiEntryPoint + authRouter.entry, authRouter.router)
    app.use(rootApiEntryPoint + uploadRouter.entry, uploadRouter.router)
}