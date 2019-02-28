const uuid = require('uuid');

class Task {
    constructor(taskName, dateCreated, taskDescription)
    {
        this.taskName = taskName;
        this.dateCreated = dateCreated;
        this.taskDescription = taskDescription;
        this.id = uuid.v4()
    }
}

module.exports = Task;
