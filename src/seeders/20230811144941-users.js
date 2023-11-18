'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 45,
        email: 'example2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        phone: '1234567899',
      },
      {
        firstName: 'may',
        lastName: 'yw',
        age: 45,
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        phone: '1234567899',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
