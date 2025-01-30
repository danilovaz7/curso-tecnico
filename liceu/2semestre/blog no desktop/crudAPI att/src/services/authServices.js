import Session from '../models/Session.js'

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

async function authenticate(req, res, next) {

    if (!req.cookies.Authentication && ! req.headers) {
        return res.status(401).send('Você não está autenticado! Faça login para acessar esta página!')
    }
    
    if(req.headers){
        const headers = req.headers;
        const authorizationHeader = headers.authorization;
        if (!authorizationHeader) {
            return res.status(403).json({ message: "Forbidden" })
        }
        const [, token] = authorizationHeader.split(' ');
        if (!token) {
            return res.status(403).json({ message: "Forbidden" })
        }
        const usuarioDoToken = jwt.decode(token);
        req.user = usuarioDoToken;
        next();
        return
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



async function pegarUsuarioDoToken(req, res) {
    const headers = req.headers;
    const authorizationHeader = headers.authorization;
    if (!authorizationHeader) {
        return res.status(403).json({ message: "Forbidden" })
    }
    const [, token] = authorizationHeader.split(' ');
    if (!token) {
        return res.status(403).json({ message: "Forbidden" })
    }
    const usuarioDoToken = jwt.decode(token);
    const user = await User.findByPk(usuarioDoToken.id)
    res.json(user);
}

function authorize(...userTypes) {
    return (req, res, next) => {
        if (!userTypes.includes(req.user.type)) {
            return res.status(403).send('Você não tem permissão para acessar está página!')
        }

        next()
    }
}
export default { authenticate, authorize, pegarUsuarioDoToken }