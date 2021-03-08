module.exports = function logger(request, response, next) {
    let date = new Date().toLocaleString();
    let method = request.method;
    let url = request.url;
    let status = response.statusCode;
    let log = '[' + date + '] ' + method + ':' + url + ' ' + status;
    console.log(log);
    next();
}