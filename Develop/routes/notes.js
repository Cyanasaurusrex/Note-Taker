const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));   
})

notes.post('/', (req, res) => {
    newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
})

module.exports = notes