import {Sequelize} from 'sequelize'
import database from '../db/database.js'

const Session = database.define('session',{
    uuid : {
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    expires: {
        type: Sequelize.DATE
    }
})

export default Session