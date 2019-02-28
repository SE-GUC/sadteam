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
	User.find().
	select('id firstName middleName lastName age birtDate email password educationalBackground Skills  portofolio') // selecting the attributes to be shown
	.then(users => res.json(users));
});

router.route('/records/:email').get(function(req,res){
	User.find({email:req.params.email}, function(err,user){
		if(user.length==0){
			res.status(404).send('data not found');
		}
		res.json(user[0]);
	}).	select('id firstName middleName lastName age birtDate email password educationalBackground Skills  portofolio')
	;
	
});
// updating an existing account
router.route('/update/:email').post(function(req, res) {
    User.find({email: req.params.email},function(err,user){
		if(user.length==0){
			res.status(404).send('User not found');
		}else{
			if(!req.body.firstName){
            }else{
                user[0].firstName = req.body.firstName;
            }
            if(!req.body.middleName){
            }else{
                user[0].middleName = req.body.middleName;
            }
            if(!req.body.lastName){
            }else{
                user[0].lastName = req.body.lastName;
            }
            if(!req.body.age){
            }else{
                user[0].age = req.body.age;
            }
            if(!req.body.birthDate){
            }else{
                user[0].birthDate = req.body.birthDate;
            }
            if(!req.body.Skills){
            }else{
                user[0].Skills = req.body.Skills;
            }
            if(!req.body.password){
            }else{
                user[0].password = req.body.password;
            }
            if(!req.body.educationalBackground){
            }else{
                user[0].educationalBackground = req.body.educationalBackground;
            }
            if(!req.body.Tasks){
            }else{
                user[0].protofolio = req.body.protofolio;
            }
		}
		user[0].save((err, doc) => {
			if(!err){
				res.json("User Updated");
			}
			else{
				console.log('Error while updating user: ' + err);
			}
		});
	}
)
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
