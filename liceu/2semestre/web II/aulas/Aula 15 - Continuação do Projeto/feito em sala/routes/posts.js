import { Router } from 'express'

import db from '../db.js'

const router = Router({ mergeParams: true })

router.post('/', async (req, res) => { 
    const { userId } = req.params
    const { title, content } = req.body
    const id = await db.createPost(userId, title, content)

    if (id) {
        res.status(201).json({ id, user_id: userId, title, content })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
})

router.get('/', (req, res) => {
    const { userId } = req.params

    if (userId) {
        res.send('traz os posts do usuario ' + userId)        
    } else {
        res.send('traz todos os posts')
    }
})

export default router