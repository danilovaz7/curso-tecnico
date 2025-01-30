import { Sequelize } from 'sequelize'
  
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.db'
})

await sequelize.authenticate()

const Character = sequelize.define('character', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	species: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age: {
		type: Sequelize.INTEGER
	}
})

sequelize.sync()

// Cria um personagem
// const character = await Character.create({ name: 'Galinho', species: 'galo', age: 12 })

// Busca todos os personagens
// const characters = await Character.findAll()
// console.log(characters)
// console.log(characters.map(character => character.toJSON()))

// Busca todos os personagens de uma espécie
const characters = await Character.findAll({ where: { species: 'galo' } })
console.log(characters.map(character => character.toJSON()))

// Encontra um personagem pelo id
// const character = await Character.findByPk(2)
// console.log('Personagem: ')
// console.log(character.toJSON())

// Atualiza algum dado de um personagem
// character.age = 14 // Aqui atualizamos o registro em memória
// await character.save() // Aqui persistimos a alteração no banco de dados
// console.log('Personagem atualizado: ')
// console.log(character.toJSON())

// Deleta um personagem
// await character.destroy()
// console.log(character.toJSON())

