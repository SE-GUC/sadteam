const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid');


const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: object,
        required: true
    },
    currentState: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)