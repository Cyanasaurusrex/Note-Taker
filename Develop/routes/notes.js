const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));   
})

notes.post('/', (req, res) => {
    console.log(req.body.title)
    newNote = {
        title: req.body.title,
        text: req.body.text
    }
    readAndAppend(newNote, './db/db.json')
})

module.exports = notes