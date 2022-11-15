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
        queryInterface.addColumn('Hotels', 'starNumber', {
            type: Sequelize.DataTypes.INTEGER
        }),
        queryInterface.addColumn('Hotels', 'phone', {
            type: Sequelize.DataTypes.STRING
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
        queryInterface.removeColumn('Hotels', 'starNumber'),
        queryInterface.removeColumn('Hotels', 'phone')
    ])
  }
};
