import User from '../models/User.js'
import authServices from '../services/authServices.js'


async function createUsers(req, res) {
    const { name, email, password, active,image,type } = req.body

    const user = User.build({ name, email, password, active,image,type })

    try {
        await user.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de usuário inválidas: ' + error.message })
    }

    try {
        await user.save()
        res.status(201).json(user.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário: ' + error.message })
    }
}

async function getUsers(req, res) {
    const users = await User.findAll()

    if (users) {
        res.json(users)
    } else {
        res.status(500).json({ error: 'Erro ao buscar usuários' })
    }
    
    
}

async function getUserById(req, res) {
    const { id } = req.params

    const user = await User.findByPk(id)

    if (user) {
        res.json(user.toJSON())
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' })
    }
}

async function updateUser(req, res) {
    const { id } = req.params
    const { name, email, password, active,image,type } = req.body


    if (id != req.user.id && req.user.type != 'Admin') {
        return res.status(400).send('Você não tem permissão para alterar dados de outros');
    }

    const user = await User.findByPk(id)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    if (name) user.name = name
    if (email) user.email = email
    if (password) user.password = password
    if (active) user.active = active
    if (image) user.image = image
    if (type) user.type = type

    try {
        await user.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de usuário inválidas: ' + error.message })
    }

    try {
        await user.save()
        res.json(user.toJSON())
    } catch(error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário: ' + error.message })
    }
}

async function deleteUser(req, res) {
    const { id } = req.params
    
    const user = await User.findByPk(id)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }
    if(req.user.type != 'Admin'){
        return res.status(400).send('Você não tem permissão para apagar usuarios');
    }

    try {
        
        await user.destroy()
        res.json({ message: 'Usuário excluído com sucesso' })
    } catch(error) {
        res.status(500).json({ error: 'Erro ao excluir usuário: ' + error.message })
    }
}

export default {
    createUsers,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}