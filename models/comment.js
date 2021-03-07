const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String
    },
    date: {
        type: Date
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }   
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;