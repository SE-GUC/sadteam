const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose')

const Masterclass = require('../../models/Masterclass');
const validator = require('../../validations/masterclassValidations')

router.get('/', async (req,res) => {
    const masterclasses = await Masterclass.find()
    res.json({data: masterclasses})
})

router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const masterclass = await Masterclass.findOne({id})
     if(!masterclass) return res.status(404).send({error: 'Masterclass does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedMasterclass = await Masterclass.updateOne(req.body)
     res.json({msg: 'Masterclass updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMasterclass = await Masterclass.findByIdAndRemove(id)
     res.json({msg:'Masterclass was deleted successfully', data: deletedMasterclass})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newMasterclass = await Masterclass.create(req.body)
     res.json({msg:'Masterclass was created successfully', data: newMasterclass})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
module.exports = router;
