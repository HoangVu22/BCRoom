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
      this.belongsTo(models.RoomType)
      this.belongsTo(models.Hotel)
      this.hasMany(models.Image)
      this.belongsTo(models.Booking)
      this.hasMany(models.RoomRelatedService)
    }
  }
  Room.init({
    roomId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
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
    kidNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};