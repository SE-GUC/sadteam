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
            portofolio: joi.string(),
            partner: joi.boolean(),
            admin: joi.boolean(),

            consultancyAgency: joi.boolean(),
            consultancyInformation: joi.string()

            review: [joi.string()]

            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            firstName: joi.string().min(3).max(20),
            middleName: joi.string().min(3).max(20),
            lastName: joi.string().min(3).max(20),
            age: joi.number().min(18),
            birthDate: joi.date(),
            email: joi.string().email(),
            password: joi.string().regex(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/),
            educationalBackground: joi.string().min(5),		
            skills: joi.string().min(5),
            portofolio: joi.string(),
            partner: joi.boolean(),
            admin: joi.boolean(),

            consultancyAgency: joi.boolean(),
            consultancyInformation: joi.string()
         review: [joi.string()]
        }

        return Joi.validate(request, updateSchema)
    }, 
}
