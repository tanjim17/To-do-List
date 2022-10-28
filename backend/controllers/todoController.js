const Todo = require('../models/todoModel');
const mongoose = require('mongoose');

const getTodos = async (req, res) => {
    const todos = await Todo.find({}).sort({date: -1});
    res.status(200).json(todos);
};

const getTodo = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID!'});
    }

    const todo = await Todo.findById(id);
    if (!todo) {
        return res.status(404).json({error: 'To-do not found!'});
    }
    res.status(200).json(todo);
};

const createTodo = async (req, res) => {
    console.log(req.body);
    const {title, description, date} = req.body;
    try {
        const todo = await Todo.create({title, description, date});
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = {
    getTodos,
    getTodo,
    createTodo,
}