'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'Joao',
        cpf:'12345678909',
        senha: 'Joao123',
        foto: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/501.png/revision/latest?cb=20200825130100',
        tipo: 'Morador',
        numero_apartamento: '10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Victor',
        cpf: '11111111111',
        senha: 'viti',
        foto: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/501.png/revision/latest?cb=20200825130100',
        tipo: 'Admin',
        numero_apartamento: '11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Menezes',
        cpf: '23424345465',
        senha: 'Menezes111',
        foto: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/501.png/revision/latest?cb=20200825130100',
        tipo: 'Sindico',
        numero_apartamento: '22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cioba',
        cpf: '12334556778',
        senha: 'Ciobadonco',
        foto: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/501.png/revision/latest?cb=20200825130100',
        tipo: 'Morador',
        numero_apartamento: '22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Android',
        cpf: '40654532345',
        senha: 'mafialegal',
        foto: 'https://static.wikia.nocookie.net/pokemonempyrean/images/5/55/501.png/revision/latest?cb=20200825130100',
        tipo: 'Morador',
        numero_apartamento: '22',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Tokens', [
      {
        token_hash: 'joj3o1j23413',
        id_usuario: 1,
        ic_ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        token_hash: '238012u381asad',
        id_usuario: 2,
        ic_ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        token_hash: 'dccascascas1',
        id_usuario: 3,
        ic_ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        token_hash: 'asdasdasdadqa1',
        id_usuario: 2,
        ic_ativo: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        token_hash: '987d8adaisn',
        id_usuario: 4,
        ic_ativo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        token_hash: 'ondaosjdojasod',
        id_usuario: 5,
        ic_ativo: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    

  },

  async down(queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Tokens', null);
     await queryInterface.bulkDelete('Usuarios', null);
     
  }
};
