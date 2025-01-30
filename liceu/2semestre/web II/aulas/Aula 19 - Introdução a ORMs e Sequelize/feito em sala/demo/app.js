import { Sequelize } from "sequelize"
  
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "database.db"
})

await sequelize.authenticate()

const Character = sequelize.define('character', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	species: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 0
	}
})

sequelize.sync()

// const character = await Character.create({
// 	name: 'Galinho',
// 	species: 'galo',
// 	age: 122
// })

// console.log(character)

// const character = await Character.findByPk(2)

// character.name = 'Pedro Galo'
// console.log(character.toJSON())

// character.save()

// const dbCharacter = await Character.findByPk(2)
// console.log(dbCharacter.toJSON())

const character = await Character.findByPk(1)
character.destroy()