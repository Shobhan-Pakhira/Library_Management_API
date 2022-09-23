require("dotenv").config();

const require = require('express'),             // Required for creating server
    bodyparser = require('body-parser'),       // Parses body of URL
    cors = require('cors');                   // For security features

//Using Dependencies that we imported previously
const app = express();                  // using express for creating server
app.use(cors());                       // using Cors for creatig security features
app.use(bodyParser.json());           // using bodyParser for parsing the body

//Listening on PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log('Server Started on Port: ${PORT}');
})