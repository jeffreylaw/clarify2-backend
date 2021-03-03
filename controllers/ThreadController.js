const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Thread = require('../models/Thread');

exports.Threads = async function(request, response) {
    const threads = await Thread.find();
    return response.json({ threads });
}

exports.Thread = async function(request, response) {
    const thread = await Thread.findOne({ _id: request.params.id });
    if (thread) {
        return response.json({ thread });
    } else {
        return response.status(404).json({ message: 'No thread found' });
    }
}

// @TODO Decide how to add user
exports.CreateThread = async function(request, response) {
    const body = request.body;
    const board = new Board({
        title: body.title,
        text: body.text,
        date: new Date(),
        posts: [],
        user: USER
    });
    let savedBoard = await board.save();
    return response.json({ board: savedBoard });
}

exports.UpdateThread = async function(request, response) {

}

exports.DeleteThread = async function(request, response) {
    const result = await Thread.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted thread' });
    } else {
        return response.status(400).json({ message: 'Failed to delete thread' });
    }
}

