'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', [
      {
        name: 'Contact',
        phone: '555-5555',
        email: 'contact@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Contact',
        phone: '555-5555',
        email: 'contact@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Contact',
        phone: '555-5555',
        email: 'contact@mail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
