const mongoose = require('mongoose');


//Creating Schema for Students
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    libID:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    stu_name:{
        type: String,
        minLength: 2,
        required: [true, "Student Name Required"]
    },
    stu_email:{
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
        },
    },
    stu_phone:{
        type: Number,
        trim: true,
        required: [true,"Phone Number Required"],
        unique: true,
        minLength: 10,
        maxLength: 14,
    },
    department:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        trim: true,
        required: true
    },
    gender:{
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

//Exporting Student Detail Schema
module.exports = mongoose.model('student',studentSchema);