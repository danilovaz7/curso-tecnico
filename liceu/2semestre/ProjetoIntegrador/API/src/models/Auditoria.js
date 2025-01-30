import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Auditoria = database.define('auditorias', {
    dt_acesso: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    estado_registro: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Auditoria