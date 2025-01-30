import User from './User.js'
import Session from './Session.js'

Session.belongsTo(User)
User.hasMany(Session)