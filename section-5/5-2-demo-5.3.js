let http = require('http');
let fs = require('fs');
let mime = require('mime');
let path = require('path');

// let base = './public_html';
// let base = 'C:\\home\\examples\\public_html'; // absolute path
let base = `${__dirname}\\public_html`;

http.createServer((req, res) => {
    let pathname = path.normalize(base + req.url);
    // let pathname =base + req.url;
    console.log('ggaaa', pathname);

    // create and pipe readable stream
    fs.stat(pathname, (err, status) => {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write('Resource miss 404\n')
            res.end()
        } else if (status.isFile) {
            let type = mime.getType(pathname)
            res.setHeader('Content-Type', type);

            // create and pipe readable stream
            let file = fs.createReadStream(pathname)
            file.on('open', () => {
                res.statusCode = 200;
                file.pipe(res);
            })

            file.on('error', (err) => {
                console.log(err);
                res.writeHead(403);
                res.write('file missing or permission problem')
                res.end();
            })
        } else {
            res.writeHead(403)
            res.write('Directory access is forbidden');
            res.end();
        }
    })
}).listen(8124)

console.log('server is running at 127.0.0.1:8142');
