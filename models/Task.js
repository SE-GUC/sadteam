const uuid = require('uuid');

class Task {
    constructor(name, description)
    {
        this.name = name;
        this.description = description;
        this.id = uuid.v4()
    }
}

module.exports = Task;
