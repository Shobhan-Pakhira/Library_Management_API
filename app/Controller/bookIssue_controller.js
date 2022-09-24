const issueDate = require('../model/bookIssue_model');
const http_formatter = require('../Util/http_formatter');

//Creating Record of Book Issuing
const createIssue = async (request, response) => {
    try{
        const record = await issueDate.create(request.body);
            return response.status(200).json(http_formatter(record,"Recorded Issuing Date"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(record,"Failure in Recording Issue Date"))
    }
};


//Getting Record of Book Issuing
const getIssue = async (request, response) => {
    try{
        const record = await issueDate.find({});
            return response.status(200).json(http_formatter(record,"Fetching Recorded Issuing Date Successful"))
    } catch (error) {
        console.log(error)
        return response.status(400).json(http_formatter(record,"Failure in Fetching Issue Date"))
    }
};


module.exports = {
    createIssue,
    getIssue
};