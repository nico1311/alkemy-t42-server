'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('members', [{
        name: 'John Doe',
        image: 'ExampleSeederImage'
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('members', null, {});
  }
};
