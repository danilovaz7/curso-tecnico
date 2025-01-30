import User from '../models/User.js'
import Post from '../models/Post.js'

async function createPost(req, res) {
    const { userId } = req.params
    const { title, content } = req.body

    const user = await User.findByPk(userId)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    const post = await Post.build({ title, content, userId })

    try {
        await post.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de postagem inválidas: ' + error.message })
    }

    try {
        await post.save()
        res.status(201).json(post.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar postagem: ' + error.message })
    }
}

export default { createPost }