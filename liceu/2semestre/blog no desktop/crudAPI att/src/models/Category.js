import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Category = database.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
})

export default Category