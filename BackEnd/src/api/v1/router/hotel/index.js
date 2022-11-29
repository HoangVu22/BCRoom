const router = require('express').Router()
const controllers = require('../../controller')

router.get('/:address', controllers.getHotelsByAddress)
router.post('/count', controllers.countHotelsByAddress)
router.get('/get_by_id/:hotelId', controllers.getHotelById)
router.delete('/single/:hotelId', controllers.deleteHotel)
router.post('/change_status/:hotelId', controllers.changeStatusHotel)

module.exports = {
    entry: '/hotels',
    router
}