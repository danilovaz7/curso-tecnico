import express from 'express'

import usersRouter from './routes/users.js'
import postsRouter from './routes/posts.js'

const app = express()

app.use(express.json())

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
