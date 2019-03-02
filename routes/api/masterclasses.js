
// Import express

const express = require('express')

// Create the app

const app = express()

// Use it with post

app.use(express.json())



// We will treat this array of books as our database for now
//name w category w description w id
const masterclasses = [

new Masterclass('Electronics', 'Electrical Engineering', 'example'),
	new Masterclass('Graphic Design', 'Arts and Design', 'example')


]



// Default route (entry point)





// Get all books

app.get('/api/masterclasses', (req, res) => {

    res.send(masterclasses)

})


app.listen(port, () => console.log(`Server up and running on port ${port}`))
