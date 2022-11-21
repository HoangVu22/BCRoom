const router = require('express').Router()
const controllers = require('../../controller')

router.get('/:address', controllers.getHotelsByAddress)
router.post('/count', controllers.countHotelsByAddress)

module.exports = {
    entry: '/hotels',
    router
}