const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserDB', { userNewUrlParser: true }, (err) => {
	if(!err) { console.log('MongoDB Connection Succeeded.') }
	else { console.log('Error in DB connection' + err) }

});

//require statement for the user model =)
require('./user');