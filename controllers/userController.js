// this file is dealing with the CRUD operations related to the user

const express = require('express');
var router = express.Router();

//creating new router ('/' is the default url + the request handler function)
router.get('/', (req, res) => {
	res.json('Welcome to user page =)') //returing a response
});

module.exports = router; //exporting this router object