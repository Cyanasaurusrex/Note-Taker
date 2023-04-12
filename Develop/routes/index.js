// static variables and requirements
const express = require('express')
const notes = require('./notes')


// express declaration
const app = express();


// routes api call to note.js
app.use('/notes', notes)


// exports express
module.exports = app