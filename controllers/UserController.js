const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');


exports.Login = async function(request, response) {
    return response.render('login/index');
}

exports.LoginUser = async function(request, response) {
    const body = request.body;
    console.log(body);

    const user = await User.findOne({ username: body.username });
    if (!user) {
        return response.send('No such user');
    }

    try {
        const match = await bcrypt.compare(body.password, user.password);
        const accessToken = jwt.sign(JSON.stringify(user), process.env.SECRET_TOKEN);
        if (match) {
            console.log(accessToken);
            response.cookie('jwt', accessToken, { maxAge: 9000000, httpOnly: true });
            return response.redirect('/');
        } else {
            return response.send('Wrong password');
        }
    } catch (error) {
        console.log('Failure in LoginUser: ' + error);
    }
}


exports.Register = async function(request, response) {
    return response.render('register/index');
}

exports.RegisterUser = async function(request, response) {
    const body = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    try {
        const user = new User({
            username: body.username,
            password: passwordHash
        });
        let savedUser = await user.save();
    } catch (error) {
        console.log('Error: ' + error);
        return response.status(404).end();
    }
    return response.render('login/index');
}

exports.Logout = async function(request, response) {
    const body = request.body;
    response.clearCookie('jwt');
    return response.redirect('/');
}