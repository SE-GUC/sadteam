

const axios = require('axios');
const functions = {
        getUser: async () => {
        const user = await axios.get('http://localhost:3000/api/users/')
        return user
        },

	      getTask: async () => {
        const task = await axios.get('http://localhost:3000/api/tasks/')
        return task
        },
        getMasterclass: async () => {
        const masterclass = await axios.get('http://localhost:3000/api/masterclasses/')
        return masterclass
        },
        
};
module.exports = functions;

