import {Sequelize} from 'sequelize'
import database from '../db/database.js'

const User = database.define('user',{
    name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type:Sequelize.STRING,
        allowNull: false
    },
})

export default User