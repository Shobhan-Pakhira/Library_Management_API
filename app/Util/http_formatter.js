// we simply want to export a function that formats thee HTTP response!!

const http_formatter = (data, message = 'ok', success = true) => {
    if (success === false && data.code == 11000) {
        message = ``;
        Object.keys(data.keyValue).forEach(key => {
            message += `${key} : ${data.keyValue[key]} already exist in our record. `
        })
    }
    if (success === false && data.name == "ValidationError") message = data.message;
    return { message, data, success };
}

module.exports = http_formatter;