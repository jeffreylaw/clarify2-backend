const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Board = require('../models/board');

exports.Boards = async function(request, response) {
    const boards = await Board.find();
    return response.json({ boards });
}

exports.Board = async function(request, response) {
    const board = await Board.findOne({ _id: request.params.id });
    if (board) {
        return response.json({ board });
    } else {
        return response.status(404).json({ message: 'No board found' });
    }
}

exports.CreateBoard = async function(request, response) {
    const body = request.body;
    const board = new Board({
        code: body.code,
        name: body.name,
        instructor: body.instructor
    });
    let savedBoard = await board.save();
    return response.json({ board: savedBoard });
}

exports.UpdateBoard = async function(request, response) {
    const body = request.body;
    const result = await Board.updateOne({ _id: request.params.id }, { 
        code: body.code,
        name: body.name,
        instructor: body.instructor 
    });

}

exports.DeleteBoard = async function(request, response) {
    const result = await Board.deleteOne({ _id: request.params.id });
    if (result.ok == 1) {
        return response.json({ message: 'Deleted board' });
    } else {
        return response.status(400).json({ message: 'Failed to delete board' });
    }
}
