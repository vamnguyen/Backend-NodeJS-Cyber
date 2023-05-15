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
    await queryInterface.bulkInsert(
      'stations',
      [
        {
          name: 'Bến xe miền Đông',
          address: '292 Đinh Bộ Lĩnh, F26, quận Bình Thạnh, Thành phố Hồ Chí Minh',
          province: 'Thành phố Hồ Chí Minh',
          createdAt: '2023-05-13 03:52:12',
          updatedAt: '2023-05-13 06:15:25'
        },
        {
          name: 'Bến xe miền Nam',
          address: 'Thủ Đức, Thành phố Hồ Chí Minh',
          province: 'Thành phố Hồ Chí Minh',
          createdAt: '2023-05-13 03:52:12',
          updatedAt: '2023-05-13 06:15:25'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
