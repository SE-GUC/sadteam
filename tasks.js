const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

const tasks = [
	new Task('Task1', 5),
	new Task('Task2', 2),
	new Task('Task3', 7),
	new Task('Task4', 12),
	new Task('Task5', 10)
];

router.get('/', (req, res) => res.json({ data: tasks }));
