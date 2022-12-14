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
      this.belongsTo(models.Room, {
        foreignKey: 'roomId'
      })
      this.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      })
      this.hasOne(models.Bill, {
        foreignKey: 'bookingId'
      })
      this.hasOne(models.Transaction, {
        foreignKey: 'bookingId'
      })
    }
  }
  Booking.init({
    bookingId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    roomId: DataTypes.UUID,
    customerId: DataTypes.UUID,
    hotelName: DataTypes.STRING,
    dateFrom: DataTypes.DATEONLY,
    dateTo: DataTypes.DATEONLY,
    adultNumber: DataTypes.INTEGER,
    kidNumber: DataTypes.INTEGER,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true 
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};