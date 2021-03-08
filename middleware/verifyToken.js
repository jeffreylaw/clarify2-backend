const jwt = require('jsonwebtoken');

// @TODO Token should probably not be the user object itself?
module.exports = function verifyToken(request, response, next) {
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    if (decodedToken) {
        request.user = decodedToken;
    } else {
        return response.sendStatus(401); // Temp handling
    }
    next();
}
