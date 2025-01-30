import express from 'express'

const app = express()

app.use(express.json())

let tasks = []
let idCounter = 1

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.get('/tasks/:id', (req, res) => {
    const { id } = req.params

    const task = tasks.find(task => task.id == id)

    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    // for (let i=0; i < tasks.length; i++) {
    //     if (tasks[i].id == id) {
    //         res.json(tasks[i])
    //     }
    // }
})

app.post('/tasks', (req, res) => {
    const { title, completed } = req.body

    const task = { id: idCounter++, title, completed: completed || false }
    tasks.push(task)

    res.status(201).json({
        message: 'Tarefa criada com sucesso',
        task: task
    })
})

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    const { title, completed } = req.body

    const task = tasks.find(task => task.id == id)

    if (task) {
        if (title) {
            task.title = title
        }

        if (completed) {
            task.completed = completed
        }

        // Minha solução:
        // task.title = title || task.title
        // task.completed = completed || task.completed

        res.json(task)
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' })
    }
})

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params

    // Solução usando 'for'
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            const deletedTask = tasks.splice(i, 1)
            return res.json(deletedTask)
        }
    }
    
    res.status(404).json({ message: 'Tarefa não encontrada' })

    // Solução de uma linha usando 'filter'
    // O filter pega um array e retorna um outro array contendo APENAS os elementos
    // onde a função passada retorna true. Nesse caso, todos que não sejam o id recebido

    // tasks = tasks.filter(task => task.id != id)
})

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000')
})