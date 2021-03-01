const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.Login = async function(request, response) {
    const body = request.body;
    const user = await User.findOne({ username: body.username });
    if (!user) {
        return response.status(404).json({ message: 'User does not exist' });
    }
    const match = await bcrypt.compare(body.password, user.password);
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_TOKEN);
    if (match) {
        return response.json({ token, roles: user.roles})
    } else {
        return response.status(401).json({ message: 'Wrong password' });
    }
}

exports.Users = async function(request, response) {
    const users = await User.find();
    return response.json({ users });
}

exports.User = async function(request, response) {
    const user = await User.findOne({ _id: request.params.id });
    return response.json({ user });
}

exports.CreateUser = async function(request, response) {
    const body = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const user = new User({
        username: body.username,
        password: passwordHash
    });
    let savedUser = await user.save();
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_TOKEN);
    return response.json({ token, roles: user.roles})
}

exports.UpdateUser = async function(request, response) {

}

exports.DeleteUser = async function(request, response) {
    const result = await User.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted user' });
    } else {
        return response.json({ message: 'Failed to delete user' });
    }
}