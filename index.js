// route file (we add the require statement for db)

require('./models/db');

//starting the express server by adding the require statement for express using this constant express
const express = require('express');
const userController = require('./api/userController');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser'); //**2**

var app = express(); // calling the express function

//**3**
// here i include the form data to be in the request body
app.use(bodyparser.urlencoded({
	extended: true
}));
//i then convert this data to be in json format
app.use(bodyparser.json());



/*app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');*/

//start the server using the listen fucntion (3000 is the portnumber)
app.listen(3000, () => {
	console.log('Express server started at port 3000'); //success message
});

//add a route for the userController by configuring/the_use_function
app.use('/user', userController); // from this userController we have exported the router
