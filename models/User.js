//Schema for the user(member) entity/model
const mongoose = require('mongoose');

//validation 1
// the userSchema object and its structure
var userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: 'This field is required' //valdiation error msg
	},
	middleName: {
		type: String,
		required: 'This field is required'
	},
	lastName: {
		type: String,
		required: 'This field is required'
	},
	age: {  // we may make it String.. both are okay!
		type: Number,
		min: 8,
		required: 'This field is required'
	},
	birthDate: {
		type: Date,
		required: 'This field is required'
	},
	email: {
		type: String,
		required: 'This field is required'
	},
	password: {
		type: String,
		required: 'This field is required'
	},
	educationalBackground: {
		type: String,
		required: 'This field is required'
	},
	skills: {
		type: String,
		required: 'This field is required'
	},
	protofolio: {
		type: String,
		required: 'This field is required'
	}
});

//validation 2
// custom validation for email
/*
userSchema.path('email').validate((val) => {
	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(val);
}, 'Invalid e-mail');
*/
/*
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/


//as a first parameter we will spicify the name of schema then we have the schema object
mongoose.model('User', userSchema);




