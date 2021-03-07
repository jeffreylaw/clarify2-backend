module.exports = function errorHandler(error, request, response, next) {
    console.log(error.name);
    console.log(error.message);
    if (error.name == 'ValidationError') {
        return response.status(200).json({ message: error.message});
    } else {
        return response.status(500).json({ message: 'Internal server error' });
    }
}