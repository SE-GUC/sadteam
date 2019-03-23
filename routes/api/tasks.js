const express = require('express');
const app = express()
app.use(express.json())
const validator = require('../../validations')
const router = express.Router();


const Task = require('../../models/Task');

const tasks = [
	new Task('Task1', 'description1'),
	new Task('Task2', 'description2'),
	new Task('Task3', 'description3'),
	new Task('Task4', 'description4'),
	new Task('Task5', 'description5')
];


router.get('/', (req, res) => res.json({ data: tasks }));

router.post('/', (req, res) => {
    const taskName = req.body.taskName;
	const taskDescription = req.body.taskDescription;

    if (!taskName) return res.status(400).send({ err: 'taskName field is required' });
    if (typeof taskName !== 'string') return res.status(400).send({ err: 'Invalid value for taskName' });

    const newTask = {
        taskName,
		taskDescription,
        id: uuid.v4(),
    };
    return res.json({ data: newTask });
});
// Update current state

router.put('/updateCurrentState/:id', (req, res) => {
    try{ 
     const id = req.params.id 
     const task = await Task.findOne({id})
     if(!task) return res.status(404).send({error: 'Task does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedTask = await Task.updateOne(req.body)
     res.json({msg: 'Book updated successfully'})
   }
    catch(error) {
       console.log(error)
   }
     
   })

   // Assign a Consultancy
router.put('/assignConsultancy/:id', (req, res) => {
    try{ 
     const id = req.params.id 
     const task = await Task.findOne({id})
     if(!task) return res.status(404).send({error: 'Task does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedTask = await Task.updateOne(req.body)
     res.json({msg: 'Task updated successfully'})
   }
    catch(error) {
       console.log(error)
   }
     
   })
  

router.post('/joi', (req, res) => {
    const taskName = req.body.taskName
	const taskDescription = req.body.taskDescription;

    const schema = {
        taskName: Joi.string().min(3).required(),
		taskDescription: Joi.string()
    }

    const result = Joi.validate(req.body, schema);

    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const newTask = {
        taskName,
		taskDescription,
        id: uuid.v4(),
    };
    return res.json({ data: newTask });
});

app.put('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id 
    const updatedName = req.body.name
    const task = tasks.find(task => task.id === taskID)
    task.name = updatedName;
    res.send(tasks)
});

app.put('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id 
    const updatedDescription = req.body.description
    const task = tasks.find(task => task.id === taskID)
    task.description = updatedDescription;
    res.send(tasks)
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id 
    const task = tasks.find(task => task.id === taskID)
    const index = tasks.indexOf(task)
    tasks.splice(index,1)
    res.send(tasks)
})


module.exports = [router,app];
