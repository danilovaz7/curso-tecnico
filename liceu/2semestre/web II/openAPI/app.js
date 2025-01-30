import express from 'express'

import db from './src/db/database.js'
import router from './src/routes/router.js'

await db.sync()

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000.')
})