const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            description: Joi.string().min(3).max(100).required(),
            applicants: Joi.array(),
            skillsRequired: Joi.array(),
            currentState: Joi.string(),
            reviewed: Joi.boolean(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            description: Joi.string().min(3).max(100),
            applicants: Joi.array(),
            skillsRequired: Joi.array(),
            currentState: Joi.string(),
            reviewed: Joi.boolean(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
