const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = require('./User').schema


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
    },
      currentState: {
        type: String
    },
    assignedConsultancy: {
      type: String

    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)

