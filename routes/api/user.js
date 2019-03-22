// for this code to work the Task schema should have an attribute called "skills" of type array 
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

	anothertask.find(function(err,task){
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
