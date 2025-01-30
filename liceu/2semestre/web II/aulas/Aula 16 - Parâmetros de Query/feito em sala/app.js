import express from 'express'

import charactersRouter from './routes/characters.js'

const app = express()

app.use(express.json())

app.use('/characters', charactersRouter)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
