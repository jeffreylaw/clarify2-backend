const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

threadSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Item = mongoose.model('Item', threadSchema);

module.exports = Item;