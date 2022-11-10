'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      bookingId: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      hotelName: {
        type: Sequelize.STRING
      },
      dateFrom: {
        type: Sequelize.DATEONLY
      },
      dateTo: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('Bookings');
  }
};