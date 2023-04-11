const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, readAndRemove } = require('../helpers/fsUtils');
const db = require('../db/db.json')

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));   
})

notes.post('/', (req, res) => {
    const {title, text} = req.body
    if (title && text) {
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
    } else {
        res.json('Error in posting feedback');
    }
});

notes.delete(`/:id`, (req, res) => {
    const id = req.params.id
    readAndRemove(id, './db/db.json')
    const response = {
        status: 'success'
      };
  
      res.json(response);
})


module.exports = notes