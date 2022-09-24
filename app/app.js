const express = require('express'),             // Required for creating server
    bodyParser = require('body-parser'),       // Parses body of URL
    cors = require('cors');                   // For security features


//Using Dependencies that we imported previously
const app = express();                  // using express for creating server
app.use(cors('*'));                    // using Cors for creatig security features
app.use(bodyParser.json());           // using bodyParser for parsing the body
app.use(bodyParser.urlencoded({ extended: true }));

//Linking Routes File
app.use('/book',require('../app/Routes/book_router'));

//Exporting module of app
module.exports = app;