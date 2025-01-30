import express from 'express'
import database from './db/database.js'
import router from './routes/router.js';

import './models/Associations.js'
import cookieParser from 'cookie-parser';

database.sync()

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(3000, ()=> {
    console.log("servidor escutando na porta 3000")
})

//User.create({name: 'android mafioso', email: 'mafia@gmail.com', senha: '123'})