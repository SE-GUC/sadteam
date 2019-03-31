
test('Update a task', async () => {
  body ={
      "name": "taskName",
      "description": "taskDescription",
      "skillsRequired": ["Heraldry"],
      "currentState": "Created",
      "reviewed": true
      }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3000/api/tasks",body)
  const updatedTask = await axios.put(`http://localhost:3000/api/tasks/${task.data.data._id}`,{"reviewed": false})
  await axios.delete(`http://localhost:3000/api/task/${task.data.data._id}`)
  expect(updatedTask.status).toEqual(200)
});
