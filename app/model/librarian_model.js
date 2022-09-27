const mongoose = require ('mongoose');

//Creating Schema for Librariam
const Schema = mongoose.Schema;
const LibrarianSchema = new Schema({
    name:{
        type: String,
        required:[true, "Name is Mandatory"],
        trim: true,
        minLength: 2
    },
    phone:{
        type: Number,
        minLength: 10,
        maxLength: 14,
        unique: true,
    required: [true,"Phone Number is required"]
    },
    Lib_email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        // Validation to Check Email
        validate: {
            validator: function(email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "Please enter a valid email"
        }
    },
    Designation:{
        type: String,
        required: true,
        trim: true
    },
    isDeleted:{
        type: Boolean,
        default: false,
        required: false,
    }
},
{
    timestamps: true,
    versionKey: false
});



//Exporting the schema above
module.exports = mongoose.model('Librarian', LibrarianSchema);