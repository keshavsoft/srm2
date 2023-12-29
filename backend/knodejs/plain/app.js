const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("req : ", req.url);

    switch (req.url) {
        case "/tickets":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('you called the tickets');
            break;
        default:

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('this is my first app');
            break;
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});