const notes = require('express').Router();
const dbNotes = require('../db/db.json');

//Get Routes for retrieving all notes
notes.get('/', (req, res) => {
  console.info(`Get /api/notes`);
  res.status(200).json(dbNotes);
});

module.exports = notes;
