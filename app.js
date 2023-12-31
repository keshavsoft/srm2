const express = require('express')
const app = express()
const port = 3000;
const fs = require("fs");

app.use(express.json());

app.use('/', express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/', (req, res) => {

    res.send("this is post!")
});

app.get('/tickets', (req, res) => {
    fs.writeFileSync("tickets.txt", "form tickets");
    res.send('you called tickets! and i have sent the same');
});

app.post('/tickets', (req, res) => {
    fs.writeFileSync("tickets.json", JSON.stringify({}));

    res.json(req.body);
});

app.put('/tickets', (req, res) => {
    let LocalOldData = fs.readFileSync("tickets.json");
    let LocalOldJsonData = JSON.parse(LocalOldData);
    LocalOldJsonData.push(req.body);

    fs.writeFileSync("tickets.json", JSON.stringify(LocalOldJsonData));

    res.json(req.body);
});


app.get('/customers', (req, res) => {
    res.send('you called customers')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})