// Importing modules
const express = require('express');
const colors = require('colors');

// Initializing modules
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hola mundo</h1>');
});

// Listening the server
app.listen(app.get('port'), () => {
  console.log(`Server ready at port ${app.get('port')}`.green.bold)
});