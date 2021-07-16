'use strict';
const faker = require('faker/locale/en');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let User = [];
    let i = 10;
    let j = 10;

    while (i--) {
      User.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        // Password not encrypted.
        password: faker.internet.password(),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    while (j--) {
      User.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        image:
          'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        // Password not encrypted.
        password: faker.password,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Users', User, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
