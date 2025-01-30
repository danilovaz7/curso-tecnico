import db from '../db.js'

async function newCharacter(req, res) {
    const { name, species, age } = req.body
    const id = await db.createCharacter(name, species, age)

    if (id) {
        res.status(201).json({ id, name, species, age })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o personagem!' })
    }
}

async function getCharacters(req, res) {
    const { species, order } = req.query

    const characters = await db.getCharacters(species, order)
    
    if (characters) {
        res.json(characters)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar personagens!' })
    }
}

export default { newCharacter, getCharacters }