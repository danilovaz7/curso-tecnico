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