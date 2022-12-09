'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    transactionId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    },
    bankCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bankTranNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cardType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orderInfo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    payDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responseCode: DataTypes.STRING,
    tmnCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    transactionNo: DataTypes.STRING,
    transactionStatus: DataTypes.STRING,
    txnRef: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};