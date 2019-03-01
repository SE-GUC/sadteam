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
	user.protofolio = req.body.protofolio;
	user.save((err, doc) => {
		if(!err)
			res.redirect('user/records'); // if no err while inserting, redirect to new route
		else{ //for validation error 3
			if(err.name =='ValidationError'){
				handleValidationError(err, req.body);
				res.render("user/addUser", {
					viewTitle: "Insert User", 
					user : req.body
				});
			}
			else
			console.log('Error while inserting user: ' + err);
		}
	});
}

//creating new route to show inserted user records
router.get('/records', (req,res) => {
	res.json('Users List =)');
});

//validation 4 
//vaildation error msg saved in body
function handleValidationError(err, body){
	for(field in err.errors)
	{
		switch(err.erros[field].path){ //fields are firstName, middleName, lastName......
			case 'firstName':
				body['firstNameError'] = err.errors[field].message; //this field is required
				break;
			case 'middleName':
				body['middleNameError'] = err.errors[field].message; //this field is required
				break;
			case 'lastName':
				body['lastNameError'] = err.errors[field].message; //this field is required
				break;
			case 'age':
				body['ageError'] = err.errors[field].message; //this field is required
				break;
			case 'birthDate':
				body['birthDateError'] = err.errors[field].message; //this field is required
				break;
			case 'email':
				body['emailError'] = err.errors[field].message; //this field is required
				break;
			case 'password':
				body['passwordError'] = err.errors[field].message; //this field is required
				break;
			case 'educationalBackground':
				body['educationalBackgroundError'] = err.errors[field].message; //this field is required
				break;
			case 'skills':
				body['skillsError'] = err.errors[field].message; //this field is required
				break;
			case 'protofolio':
				body['protofolioError'] = err.errors[field].message; //this field is required
				break;
			default:
				break;
		}
	}
}


module.exports = router; //exporting this router object