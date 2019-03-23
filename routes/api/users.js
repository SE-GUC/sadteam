

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const User = require('../../models/User');
const validator = require('../../validations/taskValidations')

router.get('/', async (req,res) => {
    const users = await User.find()
    res.json({data: users})
})

 
 router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newUser = await User.create(req.body)
     res.json({msg:'User was created successfully', data: newUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.findOne({id})
     if(!user) return res.status(404).send({error: 'User does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedUser = await User.updateOne(req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router; //exporting this router object
