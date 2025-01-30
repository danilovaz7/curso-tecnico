import { Router } from 'express'

import db from '../db.js'
import postsRouter from './posts.js'

const router = Router()

router.use('/:userId/posts', postsRouter)

router.post('/', async (req, res) => {
    const { name, email } = req.body
    const id = await db.createUser(name, email)

    if (id) {
        res.status(201).json({ id, name, email })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
})

router.get('/', async (req, res) => {
    const users = await db.getUsers()
    
    if (users) {
        res.json(users)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' })
    }
})

export default router