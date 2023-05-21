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
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'Anh Minh',
          email: 'hello@gmail.com',
          password: '132465',
          numberPhone: '0321654987',
          avatar: 'https://blog.back4app.com/wp-content/uploads/2021/05/backend-vs-frontend-2.png',
          type: 'CLIENT',
          createdAt: '2023-05-13 03:52:12',
          updatedAt: '2023-05-13 06:15:25'
        },
        {
          name: 'Minh Duy',
          email: 'minhduy.dev@gmail.com',
          password: '6554113abc',
          numberPhone: '03136854654',
          avatar: 'https://www.monocubed.com/wp-content/uploads/2022/10/Full-stack-web-development.jpg',
          type: 'ADMIN',
          createdAt: '2023-05-13 03:52:12',
          updatedAt: '2023-05-13 06:15:25'
        },
        {
          name: 'Nguyễn Viết Anh Minh',
          email: 'anhminh.dev@gmail.com',
          password: 'abcxyzas5215',
          numberPhone: '03979239204',
          avatar: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png',
          type: 'ADMIN',
          createdAt: '2023-05-13 03:52:12',
          updatedAt: '2023-05-13 06:15:25'
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
