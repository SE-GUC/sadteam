const axios = require('axios');
const funcs = require('./fn');


test('Update a Partner', async() => {
  body ={
      "firstName": "Bishoy",
      "lastName": "Wahib",
      "age": 23,
      "email": "bishoy@gmail.com",
      "password": "123456789",
      "partner": true
}
  expect.assertions(1)
  const partner = await axios.post("http://localhost:3000/api/users",body)
  const updatedPartner = await axios.put(`http://localhost:3000/api/users/${user.data.data._id}`,{"password": "bishoy2019"})
  await axios.delete(`http://localhost:3000/api/users/${user.data.data._id}`)
  expect(updatedPartner.status).toEqual(200)

});


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
  const updatedTask = await axios.put("http://localhost:3000/api/tasks/${task.data.data._id}",{"reviewed": false})
  await axios.delete("http://localhost:3000/api/tasks/${task.data.data._id}")
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
  const updatedUser = await axios.put("http://localhost:3000/api/users/${user.data.data._id}",{"age": 16})
  await axios.delete("http://localhost:3000/api/users/${user.data.data._id}")
  expect(updatedUser.status).toEqual(200)
});

test('Update a masterclass', async () => {
  body ={
      "name": "masterclassName",
      "description": "masterclassDescription",
      }
  expect.assertions(1)
  const masterclass = await axios.post("http://localhost:3000/api/masterclasses",body)
  const updatedMasterclass = await axios.put("http://localhost:3000/api/masterclasses/${masterclass.data.data._id}",{"name": "masterclassName1"})
  await axios.delete("http://localhost:3000/api/masterclasses/${masterclass.data.data._id}")                                     
  expect(updatedMasterclass.status).toEqual(200)
});

test('Create a user', async () => {
  body ={
      "firstName": "John",
      "lastName": "Doe",
      "age": 12,
      "email": "someone@something.com",
      "password": "12345"
      }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3000/api/users",body)
  expect(user.status).toEqual(200)
});

 test(`Getting all tasks`, async () => {
    expect.assertions(1)
    const task =  await funcs.getTask()
    expect(task.status).toEqual(200)
  });


 test(`Getting all masterclasses`, async () => {
    expect.assertions(1)
    const masterclass =  await funcs.getMasterclass()
    expect(masterclass.status).toEqual(200)
  });

test('Create a masterclass', async () => {
  body ={
      "name": "masterclassName",
      "description": "masterclassDescription",
      }
  expect.assertions(1)
  const masterclass = await axios.post("http://localhost:3000/api/masterclasses",body)
  expect(masterclass.status).toEqual(200)
});

test('Create a task', async () => {
  body ={
      "name": "taskName",
      "description": "taskDescription",
      "skillsRequired": ["Heraldry"],
      "currentState": "Created",
      "reviewed": true
      }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3000/api/tasks",body)
  expect(task.status).toEqual(200)
});

test('Delete a user', async () => {
  body ={
      "firstName": "John",
      "lastName": "Doe",
      "age": 12,
      "email": "someone@something.com",
      "password": "12345"
      }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3000/api/users",body)
  const deletedUser await axios.delete("http://localhost:3000/api/users/${user.data.data._id}")
  expect(deletedUser.status).toEqual(200)
});

test('Delete a masterclass', async () => {
  body ={
      "name": "masterclassName",
      "description": "masterclassDescription",
      }
  expect.assertions(1)
  const masterclass = await axios.post("http://localhost:3000/api/masterclasses",body)
  const deletedMasterclass = await axios.delete("http://localhost:3000/api/masterclasses/${masterclass.data.data._id}")                                     
  expect(deletedMasterclass.status).toEqual(200)
});

test('Adding user as an applicant to a task', async () => {
  body ={
      "name": "taskName",
      "description": "taskDescription",
      "skillsRequired": ["Heraldry"],
      "currentState": "Created",
      "reviewed": true
      }
   body2 ={
      "firstName": "John",
      "lastName": "Doe",
      "age": 12,
      "email": "someone@something.com",
      "password": "12345"
      }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3000/api/tasks",body)
  const user = await axios.post("http://localhost:3000/api/users",body2)
  const updatedTask = await axios.put("http://localhost:3000/api/tasks/${task.data.data._id}/${user.data.data._id}")
  await axios.delete(`http://localhost:3000/api/tasks/${task.data.data._id}`)
  expect(updatedTask.status).toEqual(200)
});

 test(`Getting a certain task`, async () => {
    expect.assertions(1)
    const task =  await funcs.getTask()
    expect(task.data.name).toEqual('Task1')
  });

test('Updating consultancy agency info', async () => {
  body ={
      "firstName": "John",
      "lastName": "Doe",
      "age": 12,
      "email": "someone@something.com",
      "password": "12345"
      "consultancyAgency": true
      }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3000/api/users",body)
  const updatedUser = await axios.put("http://localhost:3000/api/users/${user.data.data._id}",{"consultancyInfo": "NewInfo"})
  await axios.delete("http://localhost:3000/api/users/${user.data.data._id}")
  expect(updatedUser.status).toEqual(200)
});

test('Delete a task', async () => {
  body ={
      "name": "taskName",
      "description": "taskDescription",
      "skillsRequired": ["Heraldry"],
      "currentState": "Created",
      "reviewed": true
      }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3000/api/tasks",body)
  const deletedTask = await axios.delete(http://localhost:3000/api/tasks/${task.data.data._id})
  expect(deletedTask.status).toEqual(200)
});
