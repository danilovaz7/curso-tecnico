import { Sequelize } from 'sequelize'

import db from '../db/database.js'

export const Episodio = db.define('episodio', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    temporada: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    placar_atual: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
})

export default Episodio