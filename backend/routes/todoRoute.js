const express = require('express');
const {
    getTodos,
    getTodo,
    createTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/list', getTodos);

router.get('/:id', getTodo);

router.post('/', createTodo);

router.delete('/:id', (req, res) => {
    res.send({ name: 'Deleted' });
});

router.patch('/:id', (req, res) => {
    res.send({ name: 'Patched' });
});

module.exports = router;