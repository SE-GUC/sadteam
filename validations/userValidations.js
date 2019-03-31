@@ -1,18 +1,21 @@
const Joi = require('joi')
module.exports = {
    createValidation: request => {
        const createSchema = {
            firstName: joi.string().min(3).max(20).required(),
            middleName: joi.string().min(3).max(20),
            lastName: joi.string().min(3).max(20).required(),
            age: joi.number().min(18),
            birthDate: joi.date().required(),
            email: joi.string().email().required(),
            password: joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/).required(),
            educationalBackground: joi.string().min(5).required(),
            skills: joi.string().min(5),
            portofolio: joi.string()
            portofolio: joi.string(),
            partner: joi.boolean(),
            admin: joi.boolean(),
            consultancyAgency: joi.boolean(),
            consultancyInformation: joi.string()

        }

@@ -34,7 +36,9 @@ module.exports = {
            password: joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/),
            educationalBackground: joi.string().min(5),     
            skills: joi.string().min(5),
            portofolio: joi.string()
            portofolio: joi.string(),
            partner: joi.boolean(),
            admin: joi.boolean(),
            consultancyAgency: joi.boolean(),
            consultancyInformation: joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
} 
