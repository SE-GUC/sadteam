// testing functions will be in new branch --bishoytesting--

const axios = require('axios');
const functions = {
        getUser: async () => {
        const user = await axios.get('http://localhost:3000/api/users/')
        return user
        },
};

module.exports = functions;