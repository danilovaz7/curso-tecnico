import { Router } from 'express'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

const SECRETKEY = 'donco-bonco'

const router = Router();

router.get('/', (req,res) => {
    res.send('<h1>Rota desprotegida</h1>')
})

router.get('/protected',authenticate, (req,res) => {
    res.send(`<h1>Bem vindo ${req.user.name}</h1>`)
  
})


router.post('/login', async (req,res)=> {
    const {email, senha} = req.body

    const user=  await User.findOne({ where: { email } })

    if(!user){
        return res.status(404).send('Usuario nao encontrado')
    }

    if(user.senha !== senha){
        return res.status(401).send('Senha incorreta')
    }

    const token = jwt.sign({ id: user.id }, SECRETKEY, { expiresIn: 60 })
    res.cookie('Authenticate', token, { httpOnly: true })

    res.send('Usuario logado com sucesso')
})


async function authenticate (req,res,next){
    if(!req.cookies.Authenticate){
        return res.status(401).send("voce nao esta autenticado,faça seu login primeiro")
    }

    try{
        const token = jwt.verify(req.cookies.Authenticate, SECRETKEY)

        console.log(token)
        const user = await User.findByPk(token.id)
        console.log(user)
        req.user = user
        next()
    }catch(err){
        return res.status(401).send("token invalido")
    }
   
}
export default router