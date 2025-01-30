'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        name: 'Test user',
        email: 'testuser@gmail.com',
        password: '123',
        image: 'djoajodajdojasjdo21312314a',
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test user2',
        email: 'testuser2@gmail.com',
        password: '123',
        image: 'djo31211do21312314a',
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test user3',
        email: 'testuser3@gmail.com',
        password: '123',
        image: 'djoaasdaaaaajdojasjdo21312314a',
        type: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test user4',
        email: 'testuser4@gmail.com',
        password: '123',
        image: 'djoajodajdaaaaaaaa312314a',
        type: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test user5',
        email: 'testuser5@gmail.com',
        password: '123',
        image: 'djoajod12313131221312314a',
        type: 'Normal',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null);
     
  }
};
