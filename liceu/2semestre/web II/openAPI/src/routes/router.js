import { Router } from 'express'

import personagensController from '../controllers/personagensController.js'
import lutasController from '../controllers/lutasController.js'
import episodiosController from '../controllers/episodiosController.js'


const router = Router()

router.post('/personagens', personagensController.createPersonagem)
router.get('/personagens', personagensController.getPersonagem)


router.post('/lutas', lutasController.createLuta)
router.get('/lutas', lutasController.getLuta)


router.post('/episodios', episodiosController.createEp)
router.get('/episodios', episodiosController.getEp)


export default router