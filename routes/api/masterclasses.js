const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Masterclass = require('../../models/Masterclass');



router.get('/', (req, res) => res.json({ data: masterclasses }));

router.put('/updateName/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedName = req.body.name
  const masterclass = masterclasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.name = updatedName
  res.send(masterclasses)
})

router.put('/updateCategory/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedCategory = req.body.description
  const masterclass = masterclasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.projects = updatedprojects
  res.send(masterclasses)
})

router.put('/updateDescription/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedDescription = req.body.description
  const masterclass = masterclasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.workshops = updatedWorkShops
  res.send(masterclasses)
})

router.delete('/delete/:id', (req, res) => {
  const masterClassId = req.params.id 
  const masterclass = masterclasses.find(masterclass => masterclass.id === masterClassId)
  const index = masterclasses.indexOf(masterclass)
  masterclasses.splice(index,1)
  res.send(masterclasses.splice(index,1))
})

router.post('/', (req, res) => {
    const name = req.body.name;
	const category = req.body.category;
	const description = req.body.description;

    if (!name) return res.status(400).send({ err: 'name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });

    const newMasterclass = {
        name,
		category,
        description,
        id: uuid.v4(),
    };
    return res.json({ data: newMasterclass });
});

router.post('/joi', (req, res) => {
    const name = req.body.name
	const category = req.body.category;
	const description = req.body.description;

    const schema = {
        name: Joi.string().min(3).required(),
		category: Joi.string().required(),
		description: Joi.string()
    }

    const result = Joi.validate(req.body, schema);

    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const newMasterclass = {
        name,
		category,
        description,
        id: uuid.v4(),
    };
    return res.json({ data: newMasterclass });
});
module.exports = router;
