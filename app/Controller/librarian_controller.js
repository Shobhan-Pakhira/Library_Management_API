const librarian =  require('../model/librarian_model');
const http_formatter = require('../Util/http_formatter');


//Creating  Librarian
const createLibrarian = async (request,response) => {
    try {
        const UserLib = await librarian.create(request.body);
            return response.status(200).json(http_formatter(UserLib,"Librarian Created Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

//Getting Librarian
const getLibrarian = async (request,response) => {
    try {
        const {pageNo = 1, perPage = 5} = request.query; // can be undefined in the query params.
        const total_count = await Book.find({isDeleted: false}).count();
        const has_more = total_count > pageNo * perPage;
        const UserLib = await librarian.find({isDeleted: false}).skip(perPage * (pageNo - 1)).limit(perPage);
            return response.status(200).json(http_formatter(UserLib,"User Fetched Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};


module.exports = {
    createLibrarian, 
    getLibrarian
};