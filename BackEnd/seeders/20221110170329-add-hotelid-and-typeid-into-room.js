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
        queryInterface.addColumn('Rooms', 'hotelId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'Hotels',
                key: 'hotelId'
            }
        }),
        queryInterface.addColumn('Rooms', 'typeId', {
            type: Sequelize.DataTypes.UUID,
            references: {
                model: 'RoomTypes',
                key: 'typeId'
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
        queryInterface.removeColumn('Rooms', 'hotelId'),
        queryInterface.removeColumn('Rooms', 'typeId')
    ])
  }
};
