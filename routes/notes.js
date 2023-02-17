const router = require('express').Router();
const fs = require('fs');

//unique id npm package
const uniqid = require('uniqid');

const getNotes = () => {
  var noteStr = fs.readFileSync('./db/db.json', 'utf-8');
  return JSON.parse(noteStr);
};

const writeNotes = (existingNotesStr) => {
  fs.writeFileSync(
    './db/db.json',
    //stringify notes again and add replacer as null, and add 4 space
    JSON.stringify(existingNotesStr, null, 4)
  );
};

//Get Routes for retrieving all notes
router.get('/', (req, res) => {
  res.json(getNotes());
});

// router.delete('/:id', (req, res) => {

// });

//Post route for a new note
router.post('/', (req, res) => {
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

    // Convert string into JSON object
    existingNotesStr = getNotes();

    //Add a new note
    existingNotesStr.push(newNote);
    //write the string to file
    writeNotes(existingNotesStr);

    return res.json(newNote);
  } else {
    res.status(500).json(`Error in posting notes`);
  }
});

module.exports = router;
