const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/tickets', function (req, res) {
    res.send('this is from express tickets');
});

app.listen(3000);