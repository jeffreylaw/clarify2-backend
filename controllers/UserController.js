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
    if (user) {
        return response.json({ user });
    } else {
        return response.status(404).json({ message: 'No user found' });
    }
}

// @TODO Need to add role setting, model has role default to user atm
exports.CreateUser = async function(request, response) {
    const body = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const user = new User({
        username: body.username,
        password: passwordHash,
        firstName: body.firstName,
        lastName: body.lastName
    });
    let savedUser = await user.save();
    console.log(savedUser);
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_TOKEN);
    return response.json({ token, roles: user.roles})
    // try {

    // } catch {
    // }
}


// @TODO once we decide all the fields a user should have
exports.UpdateUser = async function(request, response) {
    const body = request.body;
    const result = await User.updateOne({ _id: request.params.id }, { role: body.role });
    if (result.ok == 1) {
        return response.json({ message: 'Updated user' });
    } else {
        return response.status(400).json({ message: 'Failed to update user' });
    }
}

exports.DeleteUser = async function(request, response) {
    const result = await User.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted user' });
    } else {
        return response.status(400).json({ message: 'Failed to delete user' });
    }
}