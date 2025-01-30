import express from 'express'

import database from './db.js'
import routes from './routes.js'

await database.sync()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Para receber parâmetros do body via URL
app.use(routes)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
