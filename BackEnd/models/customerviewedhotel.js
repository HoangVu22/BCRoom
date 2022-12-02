'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerViewedHotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.CustomerViewedHotel, {
        foreignKey: 'customerId'
      })
      this.belongsTo(models.Hotel, {
        foreignKey: 'hotelId'
      })
    }
  }
  CustomerViewedHotel.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    customerId: DataTypes.UUID,
    hotelId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'CustomerViewedHotel',
  });
  return CustomerViewedHotel;
};