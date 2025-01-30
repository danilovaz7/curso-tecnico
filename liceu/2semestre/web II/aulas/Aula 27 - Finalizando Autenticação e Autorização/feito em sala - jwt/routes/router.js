import { Router } from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

const SECRET_KEY = 'uma-chave-secreta'

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

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 60 })

    res.cookie('Authentication', token, { httpOnly: true })
    res.send('Usuário logado com sucesso!')
})

async function authenticate(req, res, next) {
    if (!req.cookies.Authentication) {
        return res.status(401).send('Você não está autenticado! Faça login para acessar esta página!')
    }

    try {
        const token = jwt.verify(req.cookies.Authentication, SECRET_KEY)
    
        const user = await User.findByPk(token.id)
    
        req.user = user
        next()
    } catch (error) {
        return res.status(401).send('Token inválido')
    }
}

export default router