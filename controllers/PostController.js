const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Post = require('../models/post');

exports.Posts = async function(request, response) {
    const posts = await Post.find();
    return response.json({ posts });
}

exports.Post = async function(request, response) {
    const post = await Post.findOne({ _id: request.params.id });
    if (post) {
        return response.json({ post });
    } else {
        return response.status(404).json({ message: 'No post found' });
    }
}

// @TODO Adding user id
exports.CreatePost = async function(request, response) {
    const body = request.body;
    const post = new Post({
        title: body.title,
        text: body.text,
        date: body.date,

    });
    let savedPost = await post.save();
    return response.json({ post: savedPost });    
}

// @TODO Sprint 2
exports.UpdatePost = async function(request, response) {

}

exports.DeletePost = async function(request, response) {
    const result = await Post.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted post' });
    } else {
        return response.status(400).json({ message: 'Failed to delete post' });
    }
}
