import express from 'express'

import CharactersController from './controllers/CharactersController.js'

const router = express.Router()

router.use(express.static('views')) // Para servir arquivos estáticos a partir da pasta views

router.post('/characters', CharactersController.createCharacter)
router.get('/characters', CharactersController.getCharacters)

export default router