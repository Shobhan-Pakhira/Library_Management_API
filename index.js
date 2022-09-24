require("dotenv").config();    
             //Configured DotEnv File
const mongoose = require('mongoose');
const app = require('./app/app');           //Importing App.js

//Listening on PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server Started on Port: ${PORT}`);
});


//Database Connectivity
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL).then(() => console.log(`Database Connected Successfully`))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });