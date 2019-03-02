const express = require('express');
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

router.put('/api/tasks/:id', (req, res) => {
    const taskID = req.params.id 
    const updatedName = req.body.name
    const updatedDescription = req.body.description
    const task = tasks.find(task => task.id === taskID)
    task.name = updatedName;
    task.description = updatedDescription;
    res.send(tasks)
});

module.exports = router;
