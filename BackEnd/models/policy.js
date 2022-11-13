'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Policy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, {
        foreignKey: 'roomId'
      })
    }
  }
  Policy.init({
    policyId: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID
    },
    condition: DataTypes.STRING,
    expireTime: DataTypes.STRING,
    roomNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Policy',
  });
  return Policy;
};