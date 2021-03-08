module.exports = function unknownEndpoint(request, response) {
    return response.status(404).json({ message: 'Not found' });
}