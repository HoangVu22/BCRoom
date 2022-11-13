'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, {
        foreignKey: 'bookingId'
      })
      this.belongsTo(models.Service, {
        foreignKey: 'serviceId'
      })
    }
  }
  BookingDetail.init({
    bookingDetailId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    bookingId: DataTypes.UUID,
    serviceId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'BookingDetail',
  });
  return BookingDetail;
};