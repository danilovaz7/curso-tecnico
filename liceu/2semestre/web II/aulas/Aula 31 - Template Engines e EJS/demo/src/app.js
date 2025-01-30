import express from 'express'
import dotenv from 'dotenv'

import './db/database.js'
import './models/associations.js'
import cookieParser from 'cookie-parser'
import router from './routes/router.js'

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(process.env.APP_PORT, () => {
    console.log('O servidor está escutando na porta 3000.')
})