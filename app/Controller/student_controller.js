const student =  require('../model/student_model');
const http_formatter = require('../Util/http_formatter');


//Creating Book
const createStudent = async (request,response) => {
    try {
        const user_Stu = await student.create(request.body);
            return response.status(200).json(http_formatter(user,"Student Created Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

//Getting Book
const getStudent = async (request,response) => {
    try {
        const {pageNo, perPage} = request.query;
        const user_Stu = await student.find({});
            return response.status(200).json(http_formatter(user,"Student Fetched Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};


module.exports = {
    createStudent, 
    getStudent
};