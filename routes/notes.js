const notes = require('express').Router();
const dbNotes = require('../db/db.json');
//unique id npm package
const uniqid = require('uniqid');

// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

//Get Routes for retrieving all notes
notes.get('/', (req, res) => {
  res.status(200).json(dbNotes);
  // console.log(dbNotes);
  return res.json(dbNotes);
});

//Post route for a new note
notes.post('/', (req, res) => {
  //Grab details from existing notes
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.json(`Review for  has been added!`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);

  // console.info(`${req.method} request received to add a review`);

  // const { title, text, uniqidId = 0 } = req.body;
  // console.log(req.body);
  // if (req.body && title && text) {
  //   const newNote = {
  //     title,
  //     text,
  //     uniqidId: uniqid(),
  //   };
  //   // Log the response body to the console
  //   const response = {
  //     status: 'success',
  //     body: newNote,
  //   };
  //   console.log(response);

  //res.status(500).json(`Error in posting notes`);

  // Log our request to the terminal
  console.info(`${req.method} request received to add a note`);
});

//post route to add new note to data
notes.post('/', (req, res) => {});

module.exports = notes;
