const IssueDate = require('../model/bookIssue_model');
const http_formatter = require('../Util/http_formatter');

//Creating Record of Book Issuing
const createIssue = async (request, response) => {
    try{
        const Record = await IssueDate.create(request.body);
            return response.status(200).json(http_formatter(Record ,"Recorded Issuing Date"))
    } catch (error) { 
        console.log(error)
        return response.status(400).json(http_formatter(Record,"Failure in Recording Issue Date"))
    }
};


//Getting Record of Book Issuing
const getIssue = async (request, response) => {
    try{
        const Record = await IssueDate.find({});
            return response.status(200).json(http_formatter(Record ,  "Fetching Recorded Issuing Date Successful"))
    } catch (error) {
        console.log(error)
        // return response.status(400).json(http_formatter(Record "Failure in Fetching Issue Date"))
        return response.status(200).json(http_formatter(Record , "Fetching Recorded Issued Date Failed"))
    }
};


module.exports = {
    createIssue,
    getIssue
};