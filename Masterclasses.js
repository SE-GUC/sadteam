
// Import express

const express = require('express')

// Create the app

const app = express()

// Use it with post

app.use(express.json())



// We will treat this array of books as our database for now
//name w category w description w id
const masterclasses = [

    {

        Name: 'The Prince',

        category: 'Niccolò Machiavelli',

        description: 'club',

        id: 1

    },

    {

        

            Name: 'Mekawy',
    
            category: 'student',
    
            description:'blalal',
    
            id: 2

    
        },

        {

            Name: 'The Prince',
    
            category: 'Niccolò Machiavelli',
    
            description: '140',
    
            id: 3
    
        },

    {

        

            Name: 'The Prince',
    
            category: 'Niccolò Machiavelli',
    
            description: '140',
    
            id: 4
    
        },



]



// Default route (entry point)





// Get all books

app.get('/api/masterclasses', (req, res) => {

    res.send(masterclasses)

})


const port = process.env.PORT | 3000

app.listen(port, () => console.log(`Server up and running on port ${port}`))
