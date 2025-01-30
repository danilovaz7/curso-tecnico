import User from '../models/User.js'
import Post from '../models/Post.js'

async function newPost(req, res) {
    res.render('newPost')
}

async function createPost(req, res) {
    const userId = req.user.id
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
        res.status(201).redirect(`/posts/${post.id}`)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar postagem: ' + error.message })
    }
}

async function getPosts(req, res) {
    const posts = await Post.findAll()

    if (posts) {
        res.render('allPosts', { posts })
    } else {
        res.status(500).json({ error: 'Erro ao buscar postagens' })
    }
}

async function getPostsByUserId(req, res) {
    const { userId } = req.params

    const user = await User.findByPk(userId)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    const posts = await Post.findAll({ where: { userId } })

    if (posts) {
        res.json(posts)
    } else {
        res.status(500).json({ error: 'Erro ao buscar postagens' })
    }
}

async function getPostById(req, res) {
    const { id } = req.params

    const post = await Post.findByPk(id)
    if (post) {

        res.render('post', { post })
    } else {
        res.status(404).json({ error: 'Postagem não encontrada' })
    }
}

async function updatePost(req, res) {
    const { id } = req.params
    const { title, content } = req.body

    const post = await Post.findByPk(id)

    if (!post) {
        return res.status(404).json({ error: 'Postagem não encontrada' })
    }

    if (title) post.title = title
    if (content) post.content = content

    try {
        await post.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de postagem inválidas: ' + error.message })
    }

    try {
        await post.save()
        res.json(post.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar postagem: ' + error.message })
    }
}

async function deletePost(req, res) {
    const { id } = req.params

    const post = await Post.findByPk(id)

    if (!post) {
        return res.status(404).json({ error: 'Postagem não encontrada' })
    }

    try {
        await post.destroy()
        res.json(post.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar postagem: ' + error.message })
    }
}

export default {
    newPost,
    createPost,
    getPosts,
    getPostsByUserId,
    getPostById,
    updatePost,
    deletePost
}