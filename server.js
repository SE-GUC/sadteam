// route file (we add the require statement for db)

require('./models/db');

//starting the express server by adding the require statement for express using this constant express
const express = require('express');
const userController = require('./controllers/userController');

var app = express(); // calling the express function

//start the server using the listen fucntion (3000 is the portnumber)
app.listen(3000, () => {
	console.log('Express server started at port 3000'); //success message
});

//add a route for the userController by configuring/the_use_function
app.use('/user', userController); // from this userController we have exported the router
