const express = require('express');

const app = express()
app.use(express.json())


const router = express.Router();
const mongoose = require('mongoose')
//const mongoURI = require('../../config');
//const client = new MongoClient(mongoURI.mongoURI, { useNewUrlParser: true });
//client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 


const Task = require('../../models/Task');
const validator = require('../../validations/taskValidations')

router.get('/', async (req,res) => {
    const tasks = await Task.find()
    res.json({data: tasks})
})

// Update current state

router.put('/updateCurrentState/:id', (req, res) => {
    try{ 
     const id = req.params.id 
     const task =  Task.findOne({id})
     if(!task) return res.status(404).send({error: 'Task does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedTask =  Task.updateOne(req.body)
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

     const task =  Task.findOne({id})
     if(!task) return res.status(404).send({error: 'Task does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedTask =  Task.updateOne(req.body)
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



router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newTask = await Task.create(req.body)
     res.json({msg:'Task was created successfully', data: newTask})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const task = await Task.findOne({id})
     if(!task) return res.status(404).send({error: 'Task does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedTask = await Task.updateOne(req.body)
     res.json({msg: 'Task updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//user applying for a task

 router.put('/:id/:userid', async (req,res) => {
     try{
         //I will use either the ID or the information from the body, not both
         const userid = req.params.userid
         const user = await user.findOne(req.body)
         if(!task) return res.status(404).send({error: 'Task does not exist'})
         Task.findOneAndUpdate({id: req.params.id}, {$push: {applicants: user}});

     }
     catch(error){
     console.log(error)
     }
 })
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedTask = await Task.findByIdAndRemove(id)
     res.json({msg:'Task was deleted successfully', data: deletedTask})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 //client.close();
//});


module.exports = [router];
