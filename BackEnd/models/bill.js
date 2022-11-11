'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsTo(models.Booking, {
            foreignKey: 'bookingId'
        })
    }
  }
  Bill.init({
    billId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUID
    },
    bookingId: {
        type: DataTypes.UUID,
    },
    totalPrice: DataTypes.DECIMAL(7, 2),
    billDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};