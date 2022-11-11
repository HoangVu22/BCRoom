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
      this.belongsTo(models.Booking)
      this.belongsTo(models.Service)
    }
  }
  BookingDetail.init({
    bookingDetailId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID,
    },
    bookingId: DataTypes.UUID,
    serviceId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'BookingDetail',
  });
  return BookingDetail;
};