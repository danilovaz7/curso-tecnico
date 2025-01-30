import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Post = database.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
        allowNull:false
    }
})

export default Post