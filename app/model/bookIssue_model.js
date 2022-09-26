const mongoose = require('mongoose');

//Creating Schema for Books Issue Date
const Schema = mongoose.Schema;
const booksIssueSchema = new Schema({
    issuedate:{
        type: Date,
        required: [true,"Issue Date is required"]
    },
    bookid:{
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: [true,"Book ID is required"]
    },
    bookName:{
        type: String,
        required: [true,"Provide Valid Book Name"]
    },
    studentID:{
        type: String,
        ref: "student",
        required: [true,"Student ID is required"]
    },
    issuedBy:{
        type: Schema.Types.ObjectId,
        ref: "librarian",
        required: true
    },
    returnDate:{
        type: Date,
        required: true,
        default: () => Date.now()+30*24*60*60*1000,
    },
    fine:{
        type: Number,
        default:0
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
    versionKey: false
});


//Exporting Issue Date Schema
module.exports = mongoose.model('issueDate',booksIssueSchema);