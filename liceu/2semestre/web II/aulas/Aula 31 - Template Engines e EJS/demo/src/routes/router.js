import { Router } from 'express'

import usersController from '../controllers/usersController.js'
import postsController from '../controllers/postsController.js'
import loginController from '../controllers/loginController.js'

import { authenticate } from '../services/authService.js'

const router = Router()

router.post('/users', usersController.createUsers)
router.get('/users', authenticate, usersController.getUsers)
router.get('/users/:id', authenticate, usersController.getUserById)
router.put('/users/:id', authenticate, usersController.updateUser)
router.delete('/users/:id', authenticate, usersController.deleteUser)

router.post('/posts', authenticate, postsController.createPost)
router.get('/posts', authenticate, postsController.getPosts)
router.get('/posts/:id', authenticate, postsController.getPostById)
router.get('/users/:userId/posts', authenticate, postsController.getPostsByUserId)
router.put('/posts/:id', authenticate, postsController.updatePost)
router.delete('/posts/:id', authenticate, postsController.deletePost)

router.post('/login', loginController.createToken)

export default router