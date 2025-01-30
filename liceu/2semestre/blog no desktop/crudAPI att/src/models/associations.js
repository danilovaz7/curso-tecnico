import User from './User.js'
import Post from './Post.js'
import Category from './Category.js'
import Comment from './Comment.js'
import Session from './Session.js'

Post.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Post, { foreignKey: 'userId' })

Post.belongsToMany(Category, { through: 'postCategories' })
Category.belongsToMany(Post, { through: 'postCategories' })

Comment.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Comment, { foreignKey: 'userId' })

Comment.belongsTo(Post, { foreignKey: 'postId' })
Post.hasMany(Comment, { foreignKey: 'postId' })

Session.belongsTo(User)
User.hasMany(Session)

