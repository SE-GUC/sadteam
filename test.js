
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

test('Update a user', async () => {
  body ={
      "firstName": "John",
      "lastName": "Doe",
      "age": 12,
      "email": "someone@something.com",
      "password": "12345"
      }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3000/api/users",body)
  const updatedUser = await axios.put(`http://localhost:3000/api/users/${user.data.data._id}`,{"age": 16})
  await axios.delete(`http://localhost:3000/api/user/${user.data.data._id}`)
  expect(updatedUser.status).toEqual(200)
});