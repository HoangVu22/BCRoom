'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      transactionId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      amount: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
      },
      bankCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bankTranNo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cardType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      orderInfo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      payDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      responseCode: Sequelize.STRING,
      tmnCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transactionNo: Sequelize.STRING,
      transactionStatus: Sequelize.STRING,
      txnRef: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};