const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = require('./User').Schema

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
    },
    reviewed: {
        type: Boolean
    },
    assignee: {
        type: User
    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)
