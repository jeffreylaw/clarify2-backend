const User = require('../models/user');

const checkRole = acceptedRoles => {
    return async (request, response, next) => {
        console.log(response.locals.username);
        const user = await User.findOne({ username: response.locals.username });
        console.log(user)
        for (let i=0; i<acceptedRoles.length; i++) {
            if (acceptedRoles[i] == user.role) {
                return next();
            }
        }
        return response.status(400).send('Could not match role');
    }
}

module.exports = {
    checkRole
}