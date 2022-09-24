const Book = require('../model/book_model');         //Created a variable book and connected it with Schema
const http_formatter = require('../Util/http_formatter');           //Imported HTTP_FORMATTER

//Creating Book
const createBook = async (request,response) => {
    try {
        const user = await Book.create(request.body);
            return response.status(200).json(http_formatter(user,"User Created Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};

//Getting Book
const getBook = async (request,response) => {
    try {
        const {pageNo, perPage} = request.query;
        const user = await Book.find({});
            return response.status(200).json(http_formatter(user,"User Fetched Sucessfully"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(error,"Something Went Wrong",false))
    }
};


module.exports = {
    createBook, 
    getBook
};