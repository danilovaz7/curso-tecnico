import { Sequelize } from 'sequelize'

import db from '../db/database.js'

const Personagem = db.define('personagem', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    afiliacao : {
        type: Sequelize.STRING,
        allowNull: false
    },
    especie : {
        type: Sequelize.STRING,
        allowNull: false
    },
})

export default Personagem