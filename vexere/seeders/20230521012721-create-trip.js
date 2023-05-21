'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('trips',
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: '2023-01-01 00:00:00',
          price: 500000,
          createdAt: '2023-05-20 08:45:39',
          updatedAt: '2023-05-20 08:45:39',
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: '2023-01-27 00:00:00',
          price: 300000,
          createdAt: '2023-05-20 08:45:39',
          updatedAt: '2023-05-20 08:45:39',
        },
        {
          fromStation: 1,
          toStation: 4,
          startTime: '2023-01-30 00:00:00',
          price: 400000,
          createdAt: '2023-05-20 08:45:39',
          updatedAt: '2023-05-20 08:45:39',
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
