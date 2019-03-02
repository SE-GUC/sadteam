//Schema for the user(member) entity/model
const mongoose = require('mongoose');

//validation 1
// the userSchema object and its structure
var userSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	middleName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	age: {  // we may make it String.. both are okay!
		type: Number,
		min: 8,
	},
	birthDate: {
		type: Date,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	educationalBackground: {
		type: String,
	},
	skills: {
		type: String,
	},
	portofolio: {
		type: String,
	}
});









