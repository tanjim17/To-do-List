require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoute');

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/todo', todoRoutes);

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and server running on port ' + process.env.PORT);
        });
    })
    .catch(err => console.log(err));