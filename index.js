const express = require('express')

require('./models/db');
const users = require('./routes/api/user');
const bodyparser = require('body-parser');
const tasks = require('./routes/api/tasks')
const masterclasses = require('./routes/api/masterclasses')
const app = express()
app.use(express.json())
app.use('/user', users);
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`<h1>Lirten Hub</h1>
    <a href="/api/tasks">Tasks</a>
    <a href="/api/users">Users</a>
     <a href="/api/masterclasses">Masterclasses</a>
    `);
})

app.use('/api/tasks', tasks)
app.use('/api/users', users)
app.use('/api/masterclasses', masterclasses)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

