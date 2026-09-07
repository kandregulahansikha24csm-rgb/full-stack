const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    res.end('Welcome to my Node.js HTTP server');
});

server.listen(3000, () => {
    console.log('HTTP server started at port 3000');
});