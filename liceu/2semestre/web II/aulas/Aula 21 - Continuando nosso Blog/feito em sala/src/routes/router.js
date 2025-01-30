import { Router } from 'express'

import usersController from '../controllers/usersController.js'
import postsController from '../controllers/postsController.js'

const router = Router()

router.post('/users', usersController.createUsers)
router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUserById)
router.put('/users/:id', usersController.updateUser)
router.delete('/users/:id', usersController.deleteUser)

router.post('/users/:userId/posts', postsController.createPost)

export default router