require('dotenv').config();

const express = require('express');

const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.get('/', (req, res) => {
    res.send({ name: 'Elmo' });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});