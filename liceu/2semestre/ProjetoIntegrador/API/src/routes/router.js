import { Router } from 'express'
import jwt from 'jsonwebtoken';

import usuarioController from '../controllers/usuarioController.js'
import tokenController from '../controllers/tokenController.js'
import auditoriaController from '../controllers/auditoriaController.js'
import loginController from '../controllers/loginController.js'
import pedidoController from '../controllers/pedidoController.js'
import pedidoUsuarioController from '../controllers/pedidoUsuarioController.js';

const router = Router()

router.post('/usuarios', usuarioController.createUsuario)
router.get('/usuarios',checaToken,usuarioController.getUsuarios)
router.get('/usuarios/:id_usuario', usuarioController.getUsuarioById)
router.put('/usuarios/:id_usuario',usuarioController.updateUsuario)
router.delete('/usuarios/:id_usuario',usuarioController.deleteUsario)

router.post('/usuarios/:id_usuario/tokens', tokenController.createToken)
router.get('/tokens', tokenController.getTokens)
router.get('/usuarios/:id_usuario/tokens', tokenController.getUsuarioTokens)
router.get('/tokens/:id_token', tokenController.getTokenById)
router.put('/tokens/:id_token',tokenController.updateToken)
router.delete('/tokens/:id_token',tokenController.deleteToken)

router.post('/pedidos', pedidoController.createPedido)
router.get('/pedidos', pedidoController.getPedidos)
router.get('/pedidos/:id', pedidoController.getPedidoById)
router.delete('/pedidos/:id',pedidoController.deletePedido)

router.post('/pedidosuser', pedidoUsuarioController.createPedido)
router.get('/pedidosuser', pedidoUsuarioController.getPedidos)
router.get('/pedidosuser/:id', pedidoUsuarioController.getPedidoById)
router.delete('/pedidosuser/:id',pedidoUsuarioController.deletePedido)

router.get('/auditoria', auditoriaController.getAuditoria)
router.get('/auditoria/:id', auditoriaController.getAuditoriaByPk)
router.post('/auth', auditoriaController.userAuth)

router.post('/login',loginController.login)
router.post('/eu', pegarUsuarioDoToken)

export default router


function checaToken(req, res, next) {
    const headers = req.headers;

    const authorizationHeader = headers.authorization;
    if (!authorizationHeader) {
        return res.status(403).json({ message: "Forbidden" })
    }
    const [, token] = authorizationHeader.split(' ');
    if (!token) {
        return res.status(403).json({ message: "Forbidden" })
    }

 
    next();
}

function pegarUsuarioDoToken(req, res) {
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
   
    res.json(usuarioDoToken);
}