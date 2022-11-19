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
        queryInterface.changeColumn('Rooms', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true,
        }),
        queryInterface.addColumn('Rooms', 'isBooking', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false
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
        queryInterface.removeColumn('Rooms', 'status'),
        queryInterface.removeColumn('Rooms', 'isBooking')
    ])
  }
};
