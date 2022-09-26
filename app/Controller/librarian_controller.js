const librarian =  require('../model/librarian_model');
const http_formatter = require('../Util/http_formatter');


//Creating  Librarian
const createLibrarian = async (request,response) => {
    try {
        const user_Lib = await librarian.create(request.body);
            return response.status(200).json(http_formatter(user,"Librarian Created Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

//Getting Librarian
const getLibrarian = async (request,response) => {
    try {
        const {pageNo, perPage} = request.query;
        const user = await librarian.find({});
            return response.status(200).json(http_formatter(user,"User Fetched Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};


module.exports = {
    createLibrarian, 
    getLibrarian
};