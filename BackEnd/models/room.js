'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.RoomType, {
        foreignKey: 'typeId'
      })
      this.belongsTo(models.Hotel, {
        foreignKey: 'hotelId'
      })
      this.hasMany(models.Image, {
        foreignKey: 'roomId'
      })
      this.hasOne(models.Booking, {
        foreignKey: 'roomId'
      })
      this.hasMany(models.RoomRelatedService, {
        foreignKey: 'roomId'
      })
      this.hasOne(models.Policy, {
        foreignKey: 'roomId'
      })
    }
  }
  Room.init({
    roomId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    hotelId: DataTypes.UUID,
    typeId: DataTypes.UUID,
    description: DataTypes.STRING,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    price: DataTypes.DECIMAL(7, 2),
    adultNumber: DataTypes.INTEGER,
    kidNumber: DataTypes.INTEGER,
    roomNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};