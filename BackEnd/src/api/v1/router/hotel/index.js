const router = require('express').Router()
const controllers = require('../../controller')

router.get('/:address', controllers.getHotelsByAddress)

module.exports = {
    entry: '/hotels',
    router
}