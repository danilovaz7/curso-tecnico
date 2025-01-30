'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cpf: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      senha: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tipo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numero_apartamento: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      foto: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable('Tokens',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      token_hash: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        } 
      },
      ic_ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable('Sessions',{
      uuid: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      expires: {
        type: Sequelize.DATE,
        allowNull: true
      },
     userId: {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
     },
     createdAt: {
      type: Sequelize.DATE,
      allowNull:false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull:false,
      defaultValue: Sequelize.NOW
    }
    })

    await queryInterface.createTable('Auditorias',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_token: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tokens',
          key: 'id'
        } 
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        } 
      },
      estado_registro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dt_acesso: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })

    await queryInterface.createTable('Pedidos',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_remetente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        } 
      },
      id_destinatario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        } 
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      numero_apartamento: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })

    await queryInterface.createTable('pedidosUsuarios',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_remetente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuarios',
          key: 'id'
        } 
      },
      nome: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cpf: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      senha: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tipo: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numero_apartamento: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      foto: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull:false,
        defaultValue: Sequelize.NOW
      }
    })
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('Auditorias');
      await queryInterface.dropTable('Sessions');
      await queryInterface.dropTable('Tokens');
      await queryInterface.dropTable('Pedidos'); 
      await queryInterface.dropTable('Usuarios'); 

  }
};
