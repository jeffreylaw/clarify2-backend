const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: {
        type: String
    },
    text: {
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

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;