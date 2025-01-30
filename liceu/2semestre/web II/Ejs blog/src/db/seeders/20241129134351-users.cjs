'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Danilo',
        email: 'dan@gmail.com',
        password: '123',
        image: 'https://img.odcdn.com.br/wp-content/uploads/2023/10/Luva-de-Pedreiro.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caio',
        email: 'caioba@gmail.com',
        password: 'oba',
        image: 'https://ofuxico.com.br/wp-content/uploads/2023/03/luva-de-pedreiro-gremio.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luan',
        email: 'tad@gmail.com',
        password: 'civic',
        image: 'https://amazonasatual.com.br/wp-content/uploads/2022/07/Luva-de-Pedreiro.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thiago',
        email: 'thi@gmail.com',
        password: 'ago',
        image: 'https://lncimg.lance.com.br/cdn-cgi/image/width=1080,quality=75,fit=pad,format=webp/uploads/2024/11/luva-de-pedreiro-scaled-aspect-ratio-512-320.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
