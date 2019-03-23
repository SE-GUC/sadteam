const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            description: Joi.string().min(3).max(100),
            category: Joi.number().min(50).max(3000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            description: Joi.string().min(3).max(100),
            applicants: Joi.number().min(50).max(3000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
