const express = require('express');
const router = express.Router();

const Task = require('../../models/Task');

const tasks = [
	new Task('Barney', 30),
	new Task('Lilly', 27),
	new Task('Ted', 29),
	new Task('Marshal', 27),
	new Task('Robin', 28)
];

router.get('/', (req, res) => res.json({ data: tasks }));
