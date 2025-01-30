import { Router } from 'express'
import { v4 as uuid } from 'uuid'

import User from '../models/User.js'
import authService from '../services/authService.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Rota desprotegida!</h1>')
})

router.get('/home', authService.authenticate, authService.authorize('default', 'admin'), (req, res) => {
    res.send(`<h1 style="text-align: center">Bem-vindo, ${req.user.name}!</h1>`)
})

router.get('/admin', authService.authenticate, authService.authorize('admin'), (req, res) => {
    res.send(`<h1 style="text-align: center">Página de administrador!</h1>`)
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
        return res.status(404).send('Usuário não encontrado')
    }

    if (user.password !== password) {
        return res.status(401).send('Senha incorreta')
    }

    const session = await user.createSession({
        uuid: uuid(),
        expires: new Date(Date.now() + 6000000)
    })

    res.cookie('Authentication', session.uuid, { httpOnly: true })
    res.send('Usuário logado com sucesso!')
})

export default router