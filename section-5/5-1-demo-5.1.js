const http = require('http');
const queryString = require('querystring');

let server = http.createServer().listen(8124);
server.on('request', (request, response) => {
    if (request.method === 'POST') {
        let body = '';
        // append data chunk to body
        request.on('data', (data) => {
            console.log('data: ', data);
            body += data;
        })

        // data transmitted
        request.on('end', () => {
            let post = queryString.parse(body)
            console.log('post: ', post);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Hello World222/n')
        })
    }
})

console.log('Server is running at http://127.0.0.1:8124')
