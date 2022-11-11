'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Room)
      this.belongsTo(models.Customer)
      this.belongsTo(models.Bill)
      this.hasMany(models.BookingDetail)
    }
  }
  Booking.init({
    bookingId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    customerId: DataTypes.UUID,
    hotelName: DataTypes.STRING,
    dateFrom: DataTypes.DATEONLY,
    dateTo: DataTypes.DATEONLY,
    adultNumber: DataTypes.INTEGER,
    kidNumber: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};