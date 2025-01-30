import jwt from 'jsonwebtoken'

import User from '../models/User.js'

export async function authenticate(req, res, next) {
    if (!req.cookies || !req.cookies.Authentication) {
        return res.status(401).send('Você não está autenticado! Faça login para acessar esta página.')
    }

    try {
        const token = jwt.verify(req.cookies.Authentication, process.env.SECRET_KEY)

        const user = await User.findByPk(token.id)

        req.user = user
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).send('Token inválido')
    }
}