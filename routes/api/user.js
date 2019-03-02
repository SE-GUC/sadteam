router.post('/', (req, res) => { 
	insertUser(req,res);
});
//**4'** the create/insert function for user !
function insertUser(req,res){
	var error = user.Validating(req.body);
	if(error.error!=null){
		res.json(error);
	}else{
		User.find({email:req.body.email}, function(err,user1){
			if(user1.length!=0){
				res.json("Email Address Already Exists")
			}else{
				user.save((err, doc) => {
					if(!err)
						res.redirect('../user/records'); // if no err while inserting, redirect to new route
					else{ 
						console.log('Error while inserting user: ' + err);
					}
				});
			}
		});
	
}
}

//creating new route to show inserted user records
router.get('/records', (req,res) => {
	User.find().
	select('id firstName middleName lastName age birtDate email password educationalBackground Skills  portofolio')
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
                user[0].portofolio = req.body.portofolio;
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



