module.exports = function logger(error, request, response, next) {
    let method = request.method;
    let url = request.url;
    let status = response.statusCode;
    let log = method + ':' + url + ' ' + status;
    console.log(log);
    next();
}