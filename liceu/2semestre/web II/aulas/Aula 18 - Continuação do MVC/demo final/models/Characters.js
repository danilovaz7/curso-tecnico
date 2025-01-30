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
                this.name, this.species, this.age
            )

            this.id = result.lastID
        } catch (error) {
            console.error('Erro ao criar usuário: ', error)
        }
    }

    validate() {
        if (!this.name || !this.species || !this.age) {
            throw new Error('O nome, a espécie e a idade são obrigatórios')
        }

        if (isNaN(this.age) || this.age < 0) {
            throw new Error('A idade deve ser um número positivo')
        }
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            species: this.species,
            age: this.age
        }
    }

    static async getAll(species, order) {
        try {
            let query = 'SELECT * FROM characters'
    
            if (species) {
                query += ` WHERE species = '${species}'`
            }
    
            if (order) {
                query += ` ORDER BY ${order} ASC`
            }
    
            return await db.all(query)
        } catch (error) {
            console.error('Erro ao buscar personagens: ', error)
            return null
        }
    }
}