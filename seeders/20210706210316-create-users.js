'use strict';

const faker = require('faker');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let User = [];
    let i = 10;
    let j = 10;

    while(i--){
      User.push(
        {
          id: i + 1 ,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          password: faker.internet.password(),
          roleId: 1,
          deletedAt: new Date()
         }
      );
    }

    while(j--){
      User.push(
        {
          id: j + 11,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          password: faker.password,
          roleId: 0,
          deletedAt: new Date()
         }
      )
    }


   await queryInterface.bulkInsert('User', User, {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkDelete('User', null, {});
     
  }
};