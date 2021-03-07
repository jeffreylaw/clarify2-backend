const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;