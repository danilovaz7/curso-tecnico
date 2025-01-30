import Usuario from "../models/Usuario.js";
import Token from "../models/Token.js";

async function createUsuario(req, res) {
    const { nome,cpf,tipo,foto,senha,numero_apartamento } = req.body

    const usuario = Usuario.build({ nome,cpf,tipo,foto,senha,numero_apartamento })
    console.log('EU PASSEI AQUI')
    

    try {
        await usuario.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de usuario inválidas: ' + error.message })
    }

    try {
        await usuario.save()
        res.status(201).json(usuario.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuario: ' + error.message })
    }
}


async function getUsuarios(req, res) {
    const usuarios = await Usuario.findAll()

    if (usuarios) {
        res.json(usuarios)
    } else {
        res.status(500).json({ error: 'Erro ao buscar usuarios' })
    }
}

async function getUsuarioById(req, res) {
    const { id_usuario } = req.params

    const usuario = await Usuario.findByPk(id_usuario)

    if (usuario) {
        res.json(usuario.toJSON())
    } else {
        res.status(404).json({ error: 'uUuario não encontrado' })
    }
}


async function updateUsuario(req, res) {
    const { id_usuario } = req.params
    const { nome,cpf,tipo,foto,senha,numero_apartamento } = req.body

    const usuario = await Usuario.findByPk(id_usuario)
    console.log('passei aqui')
    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    if (nome) usuario.nome = nome
    if (cpf) usuario.cpf = cpf
    if (tipo) usuario.tipo = tipo
    if (foto) usuario.foto = foto
    if (senha) usuario.senha = senha
    if (numero_apartamento) usuario.numero_apartamento = numero_apartamento

    try {
        await usuario.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de usuario inválidas: ' + error.message })
    }

    try {
        await usuario.save()
        res.json(usuario.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuario: ' + error.message })
    }
}


async function deleteUsario(req, res) {
    const { id_usuario } = req.params

    const usuario = await Usuario.findByPk(id_usuario)

    if (!usuario) {
        return res.status(404).json({ error: 'Categoria não encontrada' })
    }

    const tokensUsuario = await Token.findAll({where: {id_usuario: usuario.id}})

    try {
        await usuario.destroy()
        await tokensUsuario.destroy()
        res.json({ message: 'usuario excluído com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir usuario: ' + error.message })
    }
}

export default {
    createUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsario
}