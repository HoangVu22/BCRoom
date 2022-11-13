'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomRelatedService extends Model {
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
      this.belongsTo(models.Service, {
        foreignKey: 'serviceId'
      })
    }
  }
  RoomRelatedService.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaulltValue: DataTypes.UUIDV4
    },
    roomId: DataTypes.UUID,
    serviceId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'RoomRelatedService',
  });
  return RoomRelatedService;
};