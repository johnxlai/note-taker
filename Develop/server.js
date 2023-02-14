const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const app = express();

//app use tell express to look into public for static content
app.use(express.static('public'));

//Get route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});
// app listen

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
