const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Item = require('../models/item');

exports.Items = async function(request, response) {
    const items = await Item.find();
    return response.json({ items });
}

exports.Item = async function(request, response) {
    const item = await Item.findOne({ _id: request.params.id });
    if (item) {
        return response.json({ item });
    } else {
        return response.status(404).json({ message: 'No item found' });
    }
}

// @TODO Decide how to add user
exports.CreateItem = async function(request, response) {
    const body = request.body;
    const item = new Item({
 
    });
    let savedBoard = await board.save();
    return response.json({ board: savedBoard });
}

exports.UpdateItem = async function(request, response) {

}

exports.DeleteItem = async function(request, response) {
    const result = await Item.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted item' });
    } else {
        return response.status(400).json({ message: 'Failed to delete item' });
    }
}

