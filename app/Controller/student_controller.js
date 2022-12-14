const Student =  require('../model/student_model');                                      // Schema should start with capital letter
const http_formatter = require('../Util/http_formatter');


//Creating Book
const createStudent = async (request,response) => {
    try {
        const User = await Student.create(request.body);
            return response.status(200).json(http_formatter(User,"Student Created Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

//Getting Book
const getStudent = async (request,response) => {
    try {
        const {pageNo = 1, perPage = 5} = request.query; // can be undefined in the query params.
        const total_count = await Book.find({isDeleted: false}).count();
        const has_more = total_count > pageNo * perPage;
        const User = await Student.find({isDeleted: false}).skip(perPage * (pageNo - 1)).limit(perPage);
            return response.status(200).json(http_formatter(User,"Student Fetched Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

module.exports = {
    createStudent, 
    getStudent
};