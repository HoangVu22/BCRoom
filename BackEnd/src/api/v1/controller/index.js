module.exports = {
    login: require('./auth/login'),
    register: require('./auth/register'),
    uploadSingleFile: require('./upload/uploadSingleFile'),
    removeSingleFile: require('./upload/removeSingleFile'),
    getHotelsByAddress: require('./hotel/getHotelByAddress'),
    createNewRoomInHotel: require('./core/createNewRoomInHotel'),
    getAllServices: require('./services/getAllServices'),
    getAllRoomTypes: require('./roomTypes/getAllRoomTypes'),
    bookingRoom: require('./core/bookingRoom')
}