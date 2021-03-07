const jwt = require('jsonwebtoken');

const isAuth = (request, response, next) => {
    if (!request.cookies.jwt) {
        return response.status(401).end('No token found');
    }
    const decodedToken = jwt.verify(request.cookies.jwt, process.env.SECRET_TOKEN);
    if (decodedToken) {
        response.locals.username = decodedToken.username;
        return next();
    } else {
        return response.status(401).end('Corrupt token');
    }
}

module.exports = {
    isAuth
}