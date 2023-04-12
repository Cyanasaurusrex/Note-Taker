// static variables and requirements
const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const app = express();
const api = require('./routes/index')


// middleware for parsing json and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)


// route for beginning page
app.use(express.static('public'));
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);


// route for main notes page
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// initializes server
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);