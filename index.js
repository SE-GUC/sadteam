   
const express = require('express')
const masterclass = require('./routes/api/masterclasses')
const app = express()
app.use(express.json())

app.use('/api/masterclasses', masterclass)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
