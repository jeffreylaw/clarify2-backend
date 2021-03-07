const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String
    },
    date: {
        type: Date
    },
    comments: [{
        type: SchemaTypes.ObjectId,
        ref: 'Comment'
    }],
    user: {
        type: Schema.Types.ObjectId,
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

const Comment = mongoose.model('Comment', userSchema);

module.exports = Comment;