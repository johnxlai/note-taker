const notes = require('express').Router();
const fs = require('fs');

//unique id npm package
const uniqid = require('uniqid');

//Get Routes for retrieving all notes
notes.get('/', (req, res) => {
  //read db file again
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

//Post route for a new note
notes.post('/', (req, res) => {
  //Grab details from existing notes
  console.info(`${req.method} request received to add a note`);
  const { title, text, uniqidId = 0 } = req.body;

  let existingNotesStr;
  //Check if anything is in body and title text is available
  if (req.body && title && text) {
    const newNote = {
      title,
      text,
      uniqidId: uniqid(),
    };

    //Read Existing file
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        existingNotesStr = JSON.parse(data);

        //Add a new note
        existingNotesStr.push(newNote);
        //write the string to file
        fs.writeFile(
          './db/db.json',
          //stringify notes again and add replacer as null, and add 4 space
          JSON.stringify(existingNotesStr, null, 4),
          (err) => {
            err
              ? console.error(err)
              : console.log(
                  `Review for ${newNote.title} has been written to JSON file`
                );
          }
        );
      }
    });

    // Log the response body to the console
    const response = {
      status: 'success',
      body: newNote,
    };

    return res.json(newNote);
  } else {
    res.status(500).json(`Error in posting notes`);
  }
});

module.exports = notes;
