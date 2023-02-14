const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const app = express();

//app use tell express to look into public for static content
app.use(express.static('public'));

//Get route

// app listen

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
