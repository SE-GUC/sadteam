// this file is dealing with the CRUD operations related to the user

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User'); // **4** creating user object so i can insert in the db

//creating new router ('/' is the default url + the request handler function)
//router.get('/', (req, res) => {
//	res.json('Welcome to user page =)') //returing a response
//});

router.get('/', (req, res) => {
	res.render("user/addUser", {
		viewTitle: "Insert User"
	}); //returing a response
});

//**1**
// we have to create a POST route for this "/user" url.. already exists in server.js
//i wanted to have the parameters inserted in the request body here (i will use body-parser)
//router.post('/', (req, res) => { 
//	cosole.log(req.body);
//});
router.post('/', (req, res) => { 
	insertUser(req,res);
});

//**4'** the create/insert function for user !

function insertUser(req,res){
	var user = new User();
	user.firstName = req.body.firstName;
	user.middleName = req.body.middleName;
	user.lastName = req.body.lastName;
	user.age = req.body.age;
	user.birthDate = req.body.birthDate;
	user.email = req.body.email;
	user.password = req.body.password;
	user.educationalBackground = req.body.educationalBackground;
	user.skills = req.body.skills;
	user.portofolio = req.body.portofolio;
}



module.exports = router; //exporting this router object
