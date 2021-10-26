const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hy Node.js</h1>");
});

app.get('/contact', (req, res) => {
    res.send("<h1>Contact</h1>");
});

const port = 8000;
app.listen(port);