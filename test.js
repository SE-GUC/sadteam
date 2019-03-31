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

