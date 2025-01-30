import Character from "../models/Characters.js"

export async function createCharacter(req, res) {
    const { name, species, age } = req.body
    
    const character = new Character({ name, species, age })

    try {
        character.validate()
    } catch(error) {
        return res.status(400).json({ message: error.message })
    }
     
    try {
        await character.create()

        res.status(201).json(character.toJson())
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getCharacters(req, res) {
    const { species, order } = req.query

    const characters = await Character.getAll(species, order)
    
    if (characters) {
        res.json(characters)
    } else {
        res.status(500).json({ message: 'Não foi possível buscar personagens!' })
    }
}

export default { createCharacter, getCharacters }