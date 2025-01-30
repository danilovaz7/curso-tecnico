import User from '../models/User.js'
import Post from '../models/Post.js'

import authServices from '../services/authServices.js'

async function createPost(req, res) {
    const { userId } = req.params
    const { title, content,image } = req.body
    
    if(req.user.id != userId){
        return res.status(400).send('Você não tem permissão para postar em outros usuario');
    }

    const user = await User.findByPk(userId)

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    const post = await Post.build({ title, content, userId,image })

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

async function getPosts(req,res){
   const posts = await Post.findAll()

   if (posts) {
    res.json(posts)
} else {
    res.status(500).json({ error: 'Erro ao buscar posts' })
}
}

async function getPost(req,res){
    const {id} = req.params
    const post = await Post.findByPk(id)
 
    if (post) {
     res.json(post)
 } else {
     res.status(500).json({ error: 'Erro ao buscar post' })
 }
 }

async function getUserPosts(req,res) {
    const { userId } = req.params

    const user = await User.findByPk(userId, {include: 'posts'})

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

   const postToJSON = user.posts.map(post => post.toJSON())

    res.status(200).json(postToJSON);
}

async function updatePost(req, res) {
    const { id } = req.params
    const { title, content,image } = req.body


    const post = await Post.findByPk(id)


    if(req.user.id != post.userId){
        return res.status(400).send('Você não tem permissão para editar postagens em outros usuario');
    }
    
    if (!post) {
        return res.status(404).json({ error: 'Post não encontrado' })
    }

    if (title) post.title = title
    if (content) post.content = content
    if (image) post.image = image
    
    try {
        await post.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de post inválidas: ' + error.message })
    }

    try {
        await post.save()
        res.json(post.toJSON())
    } catch(error) {
        res.status(500).json({ error: 'Erro ao atualizar post: ' + error.message })
    }
}

async function deletePost(req, res) {
    const { id } = req.params

   
    
    const post = await Post.findByPk(id)

    if (post.userId != req.user.id && req.user.type != 'Admin') {
        return res.status(400).send('Você não tem permissão para excluir posts de outros');
    }

    if (!post) {
        return res.status(404).json({ error: 'Post não encontrado' })
    }

    try {
        await post.destroy()
        res.json({ message: 'Post excluído com sucesso' })
    } catch(error) {
        res.status(500).json({ error: 'Erro ao excluir post: ' + error.message })
    }
}

export default { 
    createPost, 
    getPosts, 
    getPost,
    getUserPosts,
    updatePost,
    deletePost
}