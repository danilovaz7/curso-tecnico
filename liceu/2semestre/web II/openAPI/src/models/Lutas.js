import { Sequelize } from 'sequelize'

import db from '../db/database.js'

export const Luta = db.define('luta', {
    adversarios: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vencedor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    especie_vencedor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    placar_pos_luta:{
        type: Sequelize.STRING,
        allowNull: false
    },
    golpe_final: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

export default Luta