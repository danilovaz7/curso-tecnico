import { Sequelize } from 'sequelize'

import database from '../db/database.js'

export const PedidoUsuario = database.define('pedidosusuarios', {
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero_apartamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

export default PedidoUsuario