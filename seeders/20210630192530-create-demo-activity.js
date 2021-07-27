'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Comida solidaria',
          image:
            'https://lh3.googleusercontent.com/pw/AM-JKLXSdlay9RDjfjoGVpwV-lqIU79Q3cUcuRBdIrms4s0O_t5uoXN5UlqBMG9u1f_ST7lX6A37HF0r02rqUmrZJpNvMJl3rOU5JlPdNffTAkZj7rVpDHbaV7DLscluCZVGcj01hl2Cs802105NzQYdLmex1g=w901-h600-no?authuser=0',
          content: 'Brindar alimentos a los que no tienen',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Recolección',
          image: 'https://lh3.googleusercontent.com/pw/AM-JKLWzeo1Fh9l0SP1JKODPWgjCxitjdENBQiY8O2Fl0T3rQHerRhRPIRGTeFIrkczFnVTyNyvg6PObHDw62cY73Y5eZG2s4H-5rniyldkNSombxafE27EuX9R4_V-cERX0pLUxjkeazVbF43mJK32Tv-x5_w=w900-h600-no?authuser=0',
          content: 'Limpieza y recolección de los residuos',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vías verdes',
          image: 'https://lh3.googleusercontent.com/pw/AM-JKLUXXtNKbtI-C1Kxb3SYB0ms3Ro__MUawTOUKgc4mmxkFjAukameYKzlSZoAeGlXlnsUKOkPHX4LbOslBgNUv2vl2wINorSA5uExbHjWt1_ItaNriSaM_nenY11tytF1jGxDJ4-whzrdI82cPGTMjrZAww=w900-h600-no?authuser=0',
          content: 'Reforestación de árboles autóctonos',
          createdAt: new Date(),
          updatedAt: new Date()
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
