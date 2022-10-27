const express = require('express');

const router = express.Router();

router.get('/list', (req, res) => {
    res.send({ name: 'Elmo' });
});

router.get('/:id', (req, res) => {
    res.send({ name: 'get single todo' });
});

router.post('/', (req, res) => {
    console.log("aaa");
    console.log(req.body);
    res.send({ name: 'Posted' });
});

router.delete('/:id', (req, res) => {
    res.send({ name: 'Deleted' });
});

router.patch('/:id', (req, res) => {
    res.send({ name: 'Patched' });
});

module.exports = router;