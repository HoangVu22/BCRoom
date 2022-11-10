'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      roomId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      price: {
        type: Sequelize.DECIMAL(7, 2)
      },
      adultNumber: {
        type: Sequelize.INTEGER
      },
      kidNumber: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Rooms');
  }
};