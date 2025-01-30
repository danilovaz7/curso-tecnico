import { Router } from 'express'
import { v4 as uuid } from 'uuid'

import User from '../models/User.js'
import Session from '../models/Session.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Rota desprotegida!</h1>')
})

router.get('/protected', authenticate, (req, res) => {
    res.send(`<h1 style="text-align: center">Bem-vindo, ${req.user.name}!</h1>`)
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
        expires: new Date(Date.now() + 60000)
    })

    res.cookie('Authentication', session.uuid, { httpOnly: true })
    res.send('Usuário logado com sucesso!')
})

async function authenticate(req, res, next) {
    if (!req.cookies.Authentication) {
        return res.status(401).send('Você não está autenticado! Faça login para acessar esta página!')
    }

    const session = await Session.findOne({ where: { uuid: req.cookies.Authentication } })

    if (!session) {
        return res.status(401).send('Você não está autenticado! Faça login para acessar esta página!')
    }

    if (session.expires < new Date()) {
        await session.destroy()
        return res.status(401).send('Sua sessão expirou! Faça login novamente')
    }

    const user = await session.getUser()

    req.user = user
    next()
}

export default router