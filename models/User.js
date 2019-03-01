//Schema for the user(member) entity/model
const joi = require('joi');
userSchema.methods.Validating = function(obj){
	var schema = {
		firstName: joi.string().required().min(3).max(20),
		middleName: joi.string().required().min(3).max(20),
		lastName: joi.string().required().min(3).max(20),
		age: joi.number().required().min(18),
		birthDate: joi.date().required(),
		email: joi.string().email().required(),
		password: joi.string().required().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/),
		educationalBackground: joi.string().required().min(5),		
		skills: joi.string().required().min(5),
		portofolio: joi.string().required()

	}
	return joi.validate(obj,schema);
}

//as a first parameter we will spicify the name of schema then we have the schema object

module.exports = mongoose.model('User', userSchema,{abortEarly: false });




