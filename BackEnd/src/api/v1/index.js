// api v1
const authRouter = require('./router/auth')

module.exports = (app) => {
    const rootApiEntryPoint = '/api/v1'
    const routers = [authRouter]

    routers.forEach(router => {
        app.use(rootApiEntryPoint + router.entry, router.router)
    })
}