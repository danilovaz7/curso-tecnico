import jwt from 'jsonwebtoken'

import User from '../models/User.js'

async function createToken(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
       return res.render('login', { erro: 'email' })
     
    }

    if (user.password !== password) {
        return res.render('login', { erro: 'senha' })
      
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: 1000 })

    res.cookie('Authentication', token, { httpOnly: true })
    res.status(200).redirect(`/home`)
}

async function newLogin(req, res) {
    const { erro } = req.query

    if (erro) {
        res.render('login', { erro: 'expirado' })
    }
    res.render('login' ,{ erro: 'nada' })
}

export default { createToken, newLogin }