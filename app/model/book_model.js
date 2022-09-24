//Importing Mongoose
const mongoose = require('mongoose');


//Creating Schema for Books
const Schema = mongoose.Schema;
const booksSchema = new Schema({
    bookName:{
        type: String,
        required: [true, "Book Name is required"]
    },
    authorName:{
        type: String,
        required: [true, "Author Name is required"]
    },
    category:{
        type: String,
    },
    ISBN:{
        type: Number,
        maxLength:10
    },
    Publication:{
        type: String
    },
    Available:{
        type: Number,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false,
        required: false
    }
},
{
    timestamps: true,
    versionKey: false
})

//Exporting Books Schema
module.exports = mongoose.model('Book',booksSchema);