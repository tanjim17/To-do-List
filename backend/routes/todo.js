const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/list', (req, res) => {
    res.send({ name: 'Elmo' });
});

router.get('/:id', (req, res) => {
    res.send({ name: 'get single todo' });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const {title, description, date} = req.body;
    try {
        const todo = await Todo.create({title, description, date});
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});

router.delete('/:id', (req, res) => {
    res.send({ name: 'Deleted' });
});

router.patch('/:id', (req, res) => {
    res.send({ name: 'Patched' });
});

module.exports = router;