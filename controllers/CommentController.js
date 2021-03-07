const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Comment = require('../models/Comment');

exports.Comments = async function(request, response) {
    const comments = await Comment.find();
    return response.json({ comments });
}

exports.Comment = async function(request, response) {
    const comment = await Comment.findOne({ _id: request.params.id });
    if (comment) {
        return response.json({ comment });
    } else {
        return response.status(404).json({ message: 'No comment found' });
    }
}

// @TODO Adding user id
exports.CreateComment = async function(request, response) {
    const body = request.body;
    const comment = new Comment({
        text: body.text,
        date: body.date,
        comments: [], // For replies, future feature.

    });
    let savedComment = await comment.save();
    return response.json({ comment: savedComment });
}

// @TODO Sprint 2
exports.UpdateComment = async function(request, response) {

}

exports.DeleteComment = async function(request, response) {
    const result = await Comment.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted comment' });
    } else {
        return response.status(400).json({ message: 'Failed to delete comment' });
    }
}

