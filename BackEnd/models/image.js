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
        this.belongsTo(models.Room, {
            foreignKey: 'roomId'
        })
        this.belongsTo(models.Hotel, {
            foreignKey: 'hotelId'
        })
        this.belongsTo(models.Customer, {
            foreignKey: 'customerId'
        })
        this.belongsTo(models.Voucher, {
            foreignKey: 'voucherId'
        })
        this.belongsTo(models.Review, {
            foreignKey: 'reviewId'
        })
    }
  }
  Image.init({
    imageId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    roomId: DataTypes.UUID,
    hotelId: DataTypes.UUID,
    customerId: DataTypes.UUID,
    voucherId: DataTypes.UUID,
    reviewId: DataTypes.UUID,
    url: DataTypes.TEXT,
    imageName: DataTypes.TEXT,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};