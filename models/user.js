const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

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
    // email: {
    //     type: String,
    //     trim: true,
    //     lowercase: true,
    //     unique: true,
    //     required: "Email required",
    //     validate: {
    //         validator: function(i) {
    //             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(i);
    //         },
    //         message: "Please enter a valid email"
    //     },
    // },
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

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;
