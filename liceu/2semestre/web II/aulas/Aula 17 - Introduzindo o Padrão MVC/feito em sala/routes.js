import { Router } from 'express'

import CharactersController from './controllers/CharactersController.js'

const router = Router()

router.post('/characters', CharactersController.newCharacter)
router.get('/characters', CharactersController.getCharacters)

export default router