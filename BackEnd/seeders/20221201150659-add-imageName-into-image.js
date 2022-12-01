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
        queryInterface.addColumn('Images', 'imageName', {
            type: Sequelize.DataTypes.TEXT
        }),
        queryInterface.changeColumn('Images', 'url', {
            type: Sequelize.DataTypes.TEXT
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
        queryInterface.removeColumn('Images', 'imageName'),
        queryInterface.removeColumn('Images', 'url')
    ])
  }
};
