'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.BookingDetail, {
        foreignKey: 'serviceId'
      })
      this.hasMany(models.RoomRelatedService, {
        foreignKey: 'serviceId'
      })
    }
  }
  Service.init({
    serviceId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    serviceName: DataTypes.STRING,
    fee: DataTypes.DECIMAL(7, 2)
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};