const uuid = require('uuid');

class Task {
    constructor(taskName, taskDescription)
    {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.id = uuid.v4()
    }
}

module.exports = Task;
