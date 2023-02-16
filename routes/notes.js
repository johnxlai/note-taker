const notes = require('express').Router();
const dbNotes = require('../db/db.json');
//unique id npm package
const uniqid = require('uniqid');

//Get Routes for retrieving all notes
notes.get('/', (req, res) => {
  console.info(`Get /api/notes`);
  res.status(200).json(dbNotes);
  //read from existing file
  const { noteTitle, noteTextArea, uniqidId = 0 } = req.body;

  // Check if there is anything in the response body
  // if (req.body && req.body.product) {
  //   response = {
  //     status: 'success',
  //     data: req.body,
  //   };
  //   res.status(201).json(response);
  // } else {
  //   res.status(400).json('Request body must at least contain a product name');
  // }

  if (noteTitle && noteTextArea) {
    const newNote = {
      noteTitle,
      noteTextArea,
      noteId: uniqid(),
    };
    // Log the response body to the console
    const response = {
      status: 'success',
      body: newNote,
    };
    console.log(response);
  } else {
    res.status(500).json(`Error in posting notes`);
  }
});

//Post route for a new note

module.exports = notes;
