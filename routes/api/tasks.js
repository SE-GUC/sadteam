const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const Task = require('../../models/Task');
const validator = require('../../validations/taskValidations')

router.get('/', async (req,res) => {
    const tasks = await Task.find()
    res.json({data: tasks})
})



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


module.exports = [router];
