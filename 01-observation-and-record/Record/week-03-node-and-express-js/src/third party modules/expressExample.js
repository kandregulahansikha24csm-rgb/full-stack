const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Express web application');
});

app.listen(3000, () => {
    console.log('Express application started on port 3000');
});