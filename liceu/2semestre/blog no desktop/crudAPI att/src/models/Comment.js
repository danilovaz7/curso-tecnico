import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Comment = database.define('comment', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Comment