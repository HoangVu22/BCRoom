const router = require('express').Router()
const controllers = require('../../controller')

router.get('/:address', controllers.getHotelsByAddress)
router.post('/count', controllers.countHotelsByAddress)
router.get('/get_by_id/:hotelId', controllers.getHotelById)
router.delete('/single/:hotelId', controllers.deleteHotel)

module.exports = {
    entry: '/hotels',
    router
}