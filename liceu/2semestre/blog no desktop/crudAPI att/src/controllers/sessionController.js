import User from "../models/User.js"
import { v4 as uuid } from 'uuid'
import jwt from 'jsonwebtoken';

async function login(req,res){
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
}



async function loginMobile(req, res) {
    const { email, password } = req.body
   
    if (!email || !password) {
        return res.status(400).json({ error: 'Campos faltando' })
    }

    const user = await User.findOne({
        where: {
            email,
            password,
        }
    });


    if (!user) {
        return res.status(404).json({ error: 'Email ou senha errados' })
    }

    const token = jwt.sign(JSON.stringify({
        id: user.id,
        type: user.type
    }), 'SECRET_KEY');

    return res.status(200).json({
        token,
    })
}




 
export default { 
   login,
   loginMobile,
}


   