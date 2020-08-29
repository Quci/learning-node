const zlib = require('zlib');
const path = require('path');

let gzip = zlib.createGzip();
let fs = require('fs');
let filePath = path.normalize(`${__dirname}/fishing.jpg`);

let inp = fs.createReadStream(filePath);
let out = fs.createWriteStream('fishing__.jpg.gz', {
    encoding: 'utf8',
})

out.on('close',() => {
    console.log(2222);
})

inp.pipe(gzip).pipe(out);




