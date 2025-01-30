import { Router } from 'express'

import db from '../db.js'

const router = Router()

router.post('/', async (req, res) => {
    const { name, species, age } = req.body
    const id = await db.createCharacter(name, species, age)

    if (id) {
        res.status(201).json({ id, name, species, age })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o personagem!' })
    }
})

router.get('/', async (req, res) => {
    const { species, order } = req.query

    const characters = await db.getCharacters(species, order)
    
    if (characters) {
        res.json(characters)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar personagens!' })
    }
})

export default router