import { Sequelize } from 'sequelize'

import database from '../db/database.js'

export const User = database.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    image: {
        type: Sequelize.TEXT,
        allowNull:false
    }
})

export default User