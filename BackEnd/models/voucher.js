'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
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
    }
  }
  Voucher.init({
    voucherId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    customerId: DataTypes.UUID,
    voucherName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING,
    isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    expireDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};