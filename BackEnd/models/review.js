'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
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
      this.belongsTo(models.Hotel, {
        foreignKey: 'hotelId'
      })
    }
  }
  Review.init({
    reviewId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    customerId: DataTypes.UUID,
    hotelId: DataTypes.UUID,
    starNumber: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};