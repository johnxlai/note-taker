const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = 3001;
const app = express();

//app use tell express to look into public for static content
app.use(express.static('public'));

//Get route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Get route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// app listen

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
