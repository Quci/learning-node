let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    let name = require('url').parse(req.url, true).query.name;
    if (name === undefined) {
        name = 'world';
    }
    if (name === 'burningbird') {
        let file = './phoenix5a.png';
        fs.stat(file, (err, stat) => {
            if (err) {
                console.log(err);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('Sorry, burningbird isn\'t around right now \n');
            } else {
                fs.readFile(file, (err, data) => {
                    res.contentType = './image/png';
                    res.contentLength = stat.size;
                    res.end(data, 'binary');
                })
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello ' + name + '\n');
    }
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124?name=burningbird');

