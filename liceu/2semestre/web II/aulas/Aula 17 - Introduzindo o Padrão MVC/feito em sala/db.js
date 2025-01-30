import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db

try {
    db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    })
    
    await db.exec(`
        CREATE TABLE IF NOT EXISTS characters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            species TEXT NOT NULL,
            age INTEGER NOT NULL
        );
    `)

    console.log('Banco de dados inicializado com sucesso!')
} catch (error) {
    console.error('Erro ao inicializar o banco de dados: ', error)
}

export default db








class Database {
    constructor() {
        this.db = null
    }

    async init() {
        
    }

    async getCharacters(species, order) {
        try {
            let query = 'SELECT * FROM characters'

            if (species) {
                query += ` WHERE species = '${species}'`
            }

            if (order) {
                query += ` ORDER BY ${order} ASC`
            }

            return await this.db.all(query)
        } catch (error) {
            console.error('Erro ao buscar personagens: ', error)
            return null
        }
    }

    async createCharacter(name, species, age) {
        try {
            const result = await this.db.run(
                'INSERT INTO characters (name, species, age) VALUES (?, ?, ?)',
                name,
                species,
                age
            )
            return result.lastID
        } catch (error) {
            console.error('Erro ao criar personagem: ', error)
            return null
        }
    }
}
