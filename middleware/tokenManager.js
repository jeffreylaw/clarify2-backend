const jwt = require('jsonwebtoken');

function checkToken(request, response) {
    const jwtToken = request.cookies.jwt;
    jwt.verify(jwtToken, process.env.SECRET_TOKEN, (error, data) => {
    if (error) {
        console.log('Missing token');
    } else {
        console.log('Token found');
        console.log(data);
        next();
    }
    });
}

