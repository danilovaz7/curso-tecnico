import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export class Database {
    constructor() {
        this.db = null
    }

    async init() {
        try {
            this.db = await open({
                filename: './database.db',
                driver: sqlite3.Database
            })
            
            await this.db.exec(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT
                )
            `)
        
            console.log('Banco de dados inicializado com sucesso!')
        } catch (error) {
            console.error('Erro ao inicializar o banco de dados: ', error)
        }
    }

    async createUser(name, email) {
        try {
            const result = await this.db.run(
                'INSERT INTO users (name, email) VALUES (?, ?)',
                [name, email]
            )
    
            return result.lastID
        } catch (error) {
            console.error('Erro ao criar usuário: ', error)
            return null
        }
    }
    
    async getUsers() {
        try {
            return await this.db.all('SELECT * FROM users')
        } catch (error) {
            console.error('Erro ao buscar usuários: ', error)
            return null
        }
    }
}

