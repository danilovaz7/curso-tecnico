import { Sequelize } from 'sequelize'

import db from '../db.js'

const Character = db.define('character', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    species: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

export default Character