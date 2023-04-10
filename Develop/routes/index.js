const express = require('express')
const note = require('./note')

const app = express();
app.use('/notes', note)