import db from '../db.js'

export default class Character {
    constructor(characterData) {
        this.id = characterData.id
        this.name = characterData.name
        this.species = characterData.species
        this.age = characterData.age
    }

    async create() {
        try {
            const result = await db.run(
                'INSERT INTO characters (name, species, age) VALUES (?, ?, ?)',
                this.name,
                this.species,
                this.age
            )
            
            this.id = result.lastID
        } catch (error) {
            console.error('Erro ao criar personagem: ', error)
            return null
        }
    }
}

// const name = 'liam'
// const species = 'alien'
// const age = 26

// const character = new Character({ name, species, age })

// character.name

// character.create()