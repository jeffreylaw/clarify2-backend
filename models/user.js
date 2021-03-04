const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        // required: false
    },
    lastName: {
        type: String,
        // required: false
    },
    // @TODO Need to validate this validator
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        // required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    role: {
        type: String,
        enum: ['admin', 'instructor', 'mod', 'user', 'dev'],
        default: 'user'
    }
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
