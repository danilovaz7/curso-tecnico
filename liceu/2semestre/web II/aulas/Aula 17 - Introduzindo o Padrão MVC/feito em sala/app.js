import express from 'express'

import routes from './routes.js'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
