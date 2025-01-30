import { Router } from 'express'
import authServices from '../services/authServices.js'

import usersController from '../controllers/usersController.js'
import postsController from '../controllers/postsController.js'
import categoriesController from '../controllers/categoriesController.js'
import sessionController from '../controllers/sessionController.js'



const router = Router()


router.post('/login',sessionController.login)

router.post('/loginMobile',sessionController.loginMobile)
router.post('/eu',authServices.pegarUsuarioDoToken)
 
router.post('/users',authServices.authenticate, usersController.createUsers)
router.get('/users', authServices.authenticate, usersController.getUsers)
router.get('/users/:id',authServices.authenticate,usersController.getUserById)
router.put('/users/:id',authServices.authenticate,usersController.updateUser)
router.delete('/users/:id',authServices.authenticate,authServices.authorize('Admin'),usersController.deleteUser)

router.post('/users/:userId/posts',authServices.authenticate,postsController.createPost)
router.get('/posts', authServices.authenticate,postsController.getPosts)
router.get('/posts/:id',authServices.authenticate, postsController.getPost)
router.get('/users/:userId/posts',authServices.authenticate, postsController.getUserPosts)
router.put('/posts/:id',authServices.authenticate, postsController.updatePost)
router.delete('/posts/:id', authServices.authenticate,postsController.deletePost)

router.post('/categories', categoriesController.createCategory)
router.post('/posts/:postId/categories/:categoryId', categoriesController.addCategory)
router.get('/categories', categoriesController.getCategories)
router.get('/categories/:id', categoriesController.getCategoryById)
router.put('/categories/:id',categoriesController.updateCategory)
router.delete('/categories/:id',categoriesController.deleteCategory)


export default router