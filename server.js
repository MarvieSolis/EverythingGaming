// Dependencies
// =============================================================
const express     = require("express");
const bodyParser  = require("body-parser");
const path        = require("path");
const mysql       = require('mysql')

// Sets up the Express App
// =============================================================
const app   = express();
const PORT  = 3001;

// Set up mysql
// =============================================================
const connection = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: '',
  database: 'eg'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
