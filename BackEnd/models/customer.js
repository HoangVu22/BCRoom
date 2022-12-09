'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Role, {
        foreignKey: 'roleId'
      })
      this.hasMany(models.Hotel, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.Review, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.Booking, {
        foreignKey: 'bookingId'
      })
      this.hasOne(models.Image, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.Voucher, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.CustomerViewedHotel, {
        foreignKey: 'customerId'
      })
      this.hasMany(models.Transaction, {
        foreignKey: 'customerId'
      })
    }
  }
  Customer.init({
    customerId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    roleId: DataTypes.UUID,
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};