'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsTo(models.Room)
        this.belongsTo(models.Hotel)
    }
  }
  Image.init({
    imageId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    roomId: DataTypes.UUID,
    hotelId: DataTypes.UUID,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};