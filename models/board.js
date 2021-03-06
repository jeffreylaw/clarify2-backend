const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    instructor: {
        type: String,
    },
    date: {
        type: Date
    },
    threads: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Thread' 
    }]
});

boardSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
