import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import './db/database.js'
import './models/associations.js'
import router from './routes/router.js'

dotenv.config()

const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(process.env.APP_PORT, () => {
    console.log(`O servidor está escutando na porta ${process.env.APP_PORT}`)
})