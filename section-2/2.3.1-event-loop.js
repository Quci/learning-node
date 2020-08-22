let http = require('http');
let server = http.createServer();

server.on('request', (request, response) => {
    console.log('request event');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hello World\n');
});

server.on('connection', () => {
    console.log('connection event');
})

server.listen(8124, () => {
    console.log('listening event');
})

console.log('Server running on port 8124');
