import express from 'express'
import cookieParser from 'cookie-parser'

import database from './db/database.js'
import './models/associations.js'
import router from './routes/router.js'
// import User from './models/User.js'

database.sync()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})

// User.create({ name: 'User', email: 'user@mail.com', password: '123456' })