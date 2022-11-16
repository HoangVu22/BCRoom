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
        queryInterface.changeColumn('Rooms', 'price', {
            type: Sequelize.DataTypes.DECIMAL(15, 2)
        }),
        queryInterface.changeColumn('Services', 'fee', {
            type: Sequelize.DataTypes.DECIMAL(8, 2)
        }),
        queryInterface.changeColumn('Bills', 'totalPrice', {
            type: Sequelize.DataTypes.DECIMAL(15, 2)
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
        queryInterface.removeColumn('Rooms', 'price'),
        queryInterface.removeColumn('Services', 'fee'),
        queryInterface.removeColumn('Bills', 'totalPrice')
    ])
  }
};
