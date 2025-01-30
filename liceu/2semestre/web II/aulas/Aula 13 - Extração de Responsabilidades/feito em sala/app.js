import express from 'express'

import { Database } from './db.js'

const db = new Database()
db.init()

const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
    const { name, email } = req.body
    const id = await db.createUser(name, email)

    if (id) {
        res.status(201).json({ id, name, email })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
})

app.get('/users', async (req, res) => {
    const users = await db.getUsers()
    
    if (users) {
        res.json(users)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' })
    }
})

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
