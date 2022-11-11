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
        queryInterface.addColumn('Bookings', 'roomId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'Rooms',
                key: 'roomId'
            }
        }),
        queryInterface.addColumn('Bookings', 'customerId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'Customers',
                key: 'customerId'
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
        queryInterface.removeColumn('Bookings', 'roomId'),
        queryInterface.removeColumn('Bookings', 'customerId')
    ])
  }
};
