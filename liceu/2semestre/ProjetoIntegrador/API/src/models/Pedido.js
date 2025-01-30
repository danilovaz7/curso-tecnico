import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Pedido = database.define('pedidos', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numero_apartamento: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
})

export default Pedido