

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Task = require('../../models/Task');

//creating new router ('/' is the default url + the request handler function)
//router.get('/', (req, res) => {
//	res.json('Welcome to user page =)') //returing a response
//});

const User = require('../../models/User');
const validator = require('../../validations/userValidations')
//**1**
// we have to create a POST route for this "/user" url.. already exists in server.js
//i wanted to have the parameters inserted in the request body here (i will use body-parser)
//router.post('/', (req, res) => { 
//	cosole.log(req.body);
//});

router.post('/',  (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.message })
	 const newUser = new User();
	 newUser.firstName = req.body.firstName;
	 newUser.middleName = req.body.middleName;
	 newUser.lastName = req.body.lastName;
	 newUser.age = req.body.age;
	 newUser.birthDate = req.body.birthDate;
	 newUser.email = req.body.email;
	 newUser.password = req.body.password;
	 newUser.educationalBackground = req.body.educationalBackground;
	 newUser.skills = req.body.skills;
	 newUser.portofolio = req.body.portofolio;
	 newUser.partner = req.body.partner;
	 newUser.admin = req.body.admin;
	 
		 const users = Users.find();	
		if(users.length==0){
			User.create(newUser);
			
		}else{
			for(i = 0 ; i< users.length;i++){
				if(newUser.email == users[i].email){
					res.json('email exists');
				}else{
					res.json({msg:'user added successfully',data:newUser})
				}
			}
		}
	}
	catch(error) {
        // We will be handling the error later
        console.log(error)
	}})


router.get('/', async (req,res) => {
    const users = await User.find()
    res.json({data: users})
})

 
 



//creating new route to show inserted user records
router.get('/records', (req,res) => {
	User.find().
	select('id firstName middleName lastName age birtDate email password educationalBackground skills  portofolio')
	.then(users => res.json(users));
});

router.route('/records/:email').get(function(req,res){
	User.find({email:req.params.email}, function(err,user){
		if(user.length==0){
			res.status(404).send('data not found');
		}
		res.json(user[0]);
	}).	select('id firstName middleName lastName age birtDate email password educationalBackground skills  portofolio')
	;
	
});
router.put('/:email/update', async (req,res) => {
    try {	
     const email = req.params.email
     const user = await User.findOne({email})
     if(!user) return res.status(404).send({error: 'User does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.message })
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

 });
router.route('/:email/remove').post(function(req, res) {
	User.findOneAndDelete({email:req.params.email},function(err,user){
		if(user == null){
			res.status(404).send('User not found.');
		}else{
			res.json('User deleted');
		}
	})
}
);
var array2 = new Array();
router.route('/records/:email/recommendations').get(function(req,res){
	var arr = new Array();
	User.find({email:req.params.email},function(err,user){
		if(user.length==0){
			res.status(404).send('User not found');
		}else{
			array2 = user;
		}
	});

	Task.find(function(err,task){
					for(i =  0 ; i<task.length;i++){
						var check = true;
						for(j=0;j<task[i].skills.length;j++){
							if((array2[0].skills.includes(task[i].skills[j]))==false){
								check = false;
							}
							if(check==false){
								break;
							}
						}
						if(check == true){
							arr.push(task[i])
						}
					}
					if(arr.length==0){
						res.json("No recommended Tasks are availiable.");
					}else{
						res.json(arr);
					}
				})
});

 


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
