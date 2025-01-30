import jwt from 'jsonwebtoken'

import User from '../models/User.js'

async function createToken(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email }})

    if (!user) {
        return res.status(404).send('Usuário não encontrado')
    }

    if (user.password !== password) {
        return res.status(401).send('Senha incorreta')
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: 600 })

    res.cookie('Authentication', token, { httpOnly: true })
    res.send('Usuário logado com sucesso')
}

export default { createToken }