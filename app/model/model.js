//Importing Mongoose
const mongoose = require('mongoose');


//Creating Schema for Books
const Schema = mongoose.Schema;
const booksSchema = new Schema({
    name:{
        type: String,
    }
},
{
    timestamps: true,
    versionKey: false
})

//Exporting Books Schema
module.exports = mongoose.model('Book',booksSchema);