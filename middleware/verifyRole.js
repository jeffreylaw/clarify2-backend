const User = require('../models/user');

module.exports = function verifyRole(roles) {
    return async function(request, response, next) {
        const user = await User.findOne({ _id: request.user.id });
        if (!user || !roles.includes(user.role)) {
            return response.status(403).send({ message: 'Access denied' });
        }
        next();
    }
}