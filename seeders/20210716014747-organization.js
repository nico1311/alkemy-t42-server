'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Organization',
      [
        {
          name: 'Somos más',
          image:
            'https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png', //example url logo
          phone: '1160112988',
          address: 'Address 1234, 0000 example',
          welcomeText: 'Welcome text example'
        }
      ],
      {}
    );
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
