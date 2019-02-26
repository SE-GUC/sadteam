//Schema for the user(member) entity/model
const mongoose = require('mongoose');

// the userSchema object and its structure
var userSchema = new mongoose.Schema({
	firstName: {
		type: String
	},
	middleName: {
		type: String
	},
	lastName: {
		type: String
	},
	age: {  // we may make it String.. both are okay!
		type: Number,
		min: 8
	},
	birthDate: {
		type: Date
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	educationalBackground: {
		type: String
	},
	skills: {
		type: String
	},
	protofolio: {
		type: String
	}
});

//as a first parameter we will spicify the name of schema then we have the schema object
mongoose.model('user', userSchema);




