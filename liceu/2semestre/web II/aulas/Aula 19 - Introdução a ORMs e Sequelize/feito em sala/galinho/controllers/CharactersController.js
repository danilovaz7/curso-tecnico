import Character from "../models/Characters.js"

export async function createCharacter(req, res) {
    const { name, species, age } = req.body
    
    const character = Character.build({ name, species, age })

    try {
        await character.validate()
    } catch(error) {
        return res.status(400).json({ message: error.message })
    }
     
    try {
        await character.save()

        res.status(201).json(character.toJSON())
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getCharacters(req, res) {
    const { species, order } = req.query

    const characters = await Character.findAll({
        where: species ? { species } : undefined,
        order: order ? [[order, 'ASC']] : undefined
    })
    
    if (characters) {
        res.json(characters)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar personagens!' })
    }
}

export default { createCharacter, getCharacters }