import Post from '../models/Post.js'
import Category from '../models/Category.js'

async function createCategory(req, res) {
    const { name, active } = req.body

    const category = Category.build({ name, active })

    try {
        await category.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de categoria inválidas: ' + error.message })
    }

    try {
        await category.save()
        res.status(201).json(category.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria: ' + error.message })
    }
}

async function getCategories(req, res) {
    const categories = await Category.findAll()

    if (categories) {
        res.json(categories)
    } else {
        res.status(500).json({ error: 'Erro ao buscar categorias' })
    }
}

async function getCategoryById(req, res) {
    const { id } = req.params

    const category = await Category.findByPk(id)

    if (category) {
        res.json(category.toJSON())
    } else {
        res.status(404).json({ error: 'Categoria não encontrada' })
    }
}

async function updateCategory(req, res) {
    const { id } = req.params
    const { name, active } = req.body

    const category = await Category.findByPk(id)

    if (!category) {
        return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    if (name) category.name = name
    if (active) category.active = active

    try {
        await category.validate()
    } catch (error) {
        return res.status(400).json({ error: 'Informações de categoria inválidas: ' + error.message })
    }

    try {
        await category.save()
        res.json(category.toJSON())
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar categoria: ' + error.message })
    }
}

async function deleteCategory(req, res) {
    const { id } = req.params

    const category = await Category.findByPk(id)

    if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' })
    }

    try {
        await category.destroy()
        res.json({ message: 'Categoria excluída com sucesso' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir categoria: ' + error.message })
    }
}

async function addCategory(req, res) {
    const { postId,categoryId } = req.params
    

    const post = await Post.findByPk(postId)
    const category = await Category.findByPk(categoryId)

    await post.addCategory(category)

    res.status(201).json(post.toJSON())
}

export default {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    addCategory
}