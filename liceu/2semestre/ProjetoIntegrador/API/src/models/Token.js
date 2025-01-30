import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Token = database.define('token', {
    token_hash: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ic_ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
})

export default Token