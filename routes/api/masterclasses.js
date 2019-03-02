const express = require('express')
const router = express.Router()
const masterClass = require('../../models/Masterclass')
const masterClasses = [
  new Masterclass('mostafa','jjfbsh','djfhsj','sdnjfhd','1'),
  new Masterclass('mostafa','jjfbsh','djfhsj','sdnjfhd','2'),
  new Masterclass('mostafa','jjfbsh','djfhsj','sdnjfhd','3'),
]


router.get('/get', (req, res) => res.send({ masterClasses }));

router.put('/updateName/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedName = req.body.name
  const masterclass = masterClasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.name = updatedName
  res.send(masterClasses)
})

router.put('/updateProjects/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedprojects = req.body.projects
  const masterclass = masterClasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.projects = updatedprojects
  res.send(masterClasses)
})

router.put('/updateWorkShops/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedWorkShops = req.body.workshops
  const masterclass = masterClasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.workshops = updatedWorkShops
  res.send(masterClasses)
})

router.put('/updateCourses/:id', (req, res) => {
  const masterClassId = req.params.id 
  const updatedCourses = req.body.courses
  const masterclass = masterClasses.find(masterclass => masterclass.id === masterClassId)
  masterclass.courses = updatedCourses
  res.send(masterClasses)
})

router.delete('/delete/:id', (req, res) => {
  const masterClassId = req.params.id 
  const masterclass = masterClasses.find(masterclass => masterclass.id === masterClassId)
  const index = masterClasses.indexOf(masterclass)
  masterClasses.splice(index,1)
  res.send(masterClasses.splice(index,1))
})



module.exports = router
