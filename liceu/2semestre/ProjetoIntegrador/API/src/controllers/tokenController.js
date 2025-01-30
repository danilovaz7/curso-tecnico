import Token from "../models/Token.js"
import Usuario from "../models/Usuario.js"

async function createToken(req, res) {
    const {id_usuario} = req.params
    const { token_hash } = req.body

    const user = await Usuario.findByPk(id_usuario)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    
    const token = Token.build({ token_hash, id_usuario})

    try {
        await token.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de token inválidas: ' + error.message })
    }

    try {
        await token.save()
        res.status(201).json(token.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar token: ' + error.message })
    }
}


async function getTokens(req, res) {
    const tokens = await Token.findAll()

    if (tokens) {
        res.json(tokens)
    } else {
        res.status(500).json({ error: 'Erro ao buscar tokens' })
    }
}

async function getUsuarioTokens(req,res) {
    const { id_usuario } = req.params
  
    const usuario = await Usuario.findByPk(id_usuario, {include: 'tokens'})

    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

   const tokenToJson = usuario.tokens.map(tokens => tokens.toJSON())

    res.status(200).json(tokenToJson);
}

async function getTokenById(req, res) {
    const { id_token } = req.params

    const token = await Token.findByPk(id_token)

    if (token) {
        res.json(token.toJSON())
    } else {
        res.status(404).json({ error: 'token não encontrado' })
    }
}


async function updateToken(req, res) {
    const { id_token } = req.params
    const { token_hash,id_usuario,ic_ativo } = req.body

    const token = await Token.findByPk(id_token)

    if (!token) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    
    if (token_hash) token.token_hash = token_hash
    if (id_usuario) token.id_usuario = id_usuario
    if (typeof ic_ativo !== 'undefined') token.ic_ativo = ic_ativo
    
    try {
        await token.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de token inválidas: ' + error.message })
    }

    try {
        await token.save()
        res.json(token.toJSON())

    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar token: ' + error.message })
    }
}


async function deleteToken(req, res) {
    const { id_token } = req.params

    const token = await Token.findByPk(id_token)

    if (!token) {
        return res.status(404).json({ error: 'token não encontrada' })
    }

    try {
        await token.destroy()
        res.json({ message: 'token excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir token: ' + error.message })
    }
}

export default {
    createToken,
    getTokens,
    getUsuarioTokens,
    getTokenById,
    updateToken,
    deleteToken
}