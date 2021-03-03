const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String
    },
    date: {
        type: Date
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Post = mongoose.model('Post', threadSchema);

module.exports = Post;