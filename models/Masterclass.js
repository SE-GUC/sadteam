const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MasterclassSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Masterclass = mongoose.model('masterclasses', MasterclassSchema);
