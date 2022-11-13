// api v1
const authRouter = require('./router/auth')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'

    app.use(rootApiEntryPoint + authRouter.entry, authRouter.router)
}