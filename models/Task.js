const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = require('./User')

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    applicants: {
        type: [User]
    },
    skillsRequired: {
        type: [String]
    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)
