const express = require('express');      //This is required for creating server using express
const mongoose = require('mongoose');
const dotenv =require('dotenv');        //This is required for env file
// const ToDoRoutes = require('./routes/ToDo');    // This is required for importing routes

//Defining Variables
const app = express();
dotenv.config();
const PORT = process.env.PORT;
//Defining Database Variable
const DATABASE_URL = process.env.DATABASE_URL;

//Using The Packages
app.use(express.json());
// app.use('/ToDo', ToDoRoutes);

app.get('/',(req,res)=> res.json({'message': 'server is running'}));

// //Connecting API to mongoose
// mongoose.connect(DATABASE_URL,{useNewUrlParser: true})
// .then(()=>{
//     //Listening On The Port
//     console.log('Database Connected Succesfully');
//     app.listen(PORT, () =>  console.log(`server started on port ${PORT}`)); 
// })
// .catch((err)=>{
//     console.log('Database Connection Failure');
//     console.log(err);
// })