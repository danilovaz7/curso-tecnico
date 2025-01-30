import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

import './src/models/associations.js'
import router from './src/routes/router.js'

const app = express()



app.use(express.json())
app.use(cookieParser())
app.use(router)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000.')
})