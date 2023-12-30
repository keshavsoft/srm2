const express = require('express')
const app = express()
const port = 3000;
const fs = require("fs");

app.use('/', express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/tickets', (req, res) => {
    fs.writeFileSync("tickets.txt", "form tickets");
    res.send('you called tickets! and i have sent the same');
})

app.get('/customers', (req, res) => {
    res.send('you called customers')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})