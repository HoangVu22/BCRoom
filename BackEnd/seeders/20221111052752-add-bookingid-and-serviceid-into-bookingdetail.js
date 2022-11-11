'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all([
        queryInterface.addColumn('BookingDetails', 'bookingId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'Bookings',
                key: 'bookingId'
            }
        }),
        queryInterface.addColumn('BookingDetails', 'serviceId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'Services',
                key: 'serviceId'
            }
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return Promise.all([
        queryInterface.removeColumn('BookingDetails', 'bookingId'),
        queryInterface.removeColumn('BookingDetails', 'serviceId')
    ])
  }
};
