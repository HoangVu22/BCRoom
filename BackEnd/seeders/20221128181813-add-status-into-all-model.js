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
        queryInterface.addColumn('Bills', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Customers', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Hotels', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Images', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Policies', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Reviews', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }),
        queryInterface.addColumn('Rooms', 'status', {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true
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
        queryInterface.removeColumn('Hotels', 'status'),
        queryInterface.removeColumn('Bills', 'status'),
        queryInterface.removeColumn('Customers', 'status'),
        queryInterface.removeColumn('Images', 'status'),
        queryInterface.removeColumn('Policies', 'status'),
        queryInterface.removeColumn('Reviews', 'status'),
        queryInterface.removeColumn('Rooms', 'status')
    ])
  }
};
