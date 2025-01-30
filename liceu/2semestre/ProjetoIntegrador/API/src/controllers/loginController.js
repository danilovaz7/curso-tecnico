import Usuario from "../models/Usuario.js"
import jwt from 'jsonwebtoken';


async function login(req, res) {
    const { cpf, senha } = req.body

    if (!cpf || !senha) {
        return res.status(400).json({ error: 'Campos faltando' })
    }

    const user = await Usuario.findOne({
        where: {
            cpf,
            senha,
        }
    });

    if (!user) {
        return res.status(404).json({ error: 'Email ou senha errados' })
    }

    const token = jwt.sign(JSON.stringify(user), 'SECRET_KEY');

    return res.status(200).json({
        token,
    })
}
 
export default { 
   login
}