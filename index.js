    
const express = require('express')

const tasks = require('./routes/api/tasks')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Lirten Hub</h1>
    <a href="/api/tasks">Tasks</a>
    `);
})

app.use('/api/tasks', tasks)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
