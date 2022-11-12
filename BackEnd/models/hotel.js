'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.Review, {
        foreignKey: 'hotelId'
      })
      this.hasMany(models.Room, {
        foreignKey: 'hotelId'
      })
      this.hasMany(models.Image, {
        foreignKey: 'hotelId'
      })
    }
  }
  Hotel.init({
    hotelId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    customerId: DataTypes.UUID,
    hotelName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};