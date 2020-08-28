let http = require('http');
let querystring = require('querystring');

let postData = querystring.stringify(
    {
        msg: 'Hello World!',
    }
)

let options = {
    hostname: 'localhost',
    port: 8124,
    method: 'POST',
    headers: {
        'Content-Type': 'applycation/x-www-form-urlencoded',
        'Content-length': postData.length,
    },
    agent: false,
}

let req = http.request(options, (res) => {
    console.log('STATUS', res.statusCode);
    console.log('HEADERS', JSON.stringify(res.headers));
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        console.log(`$BODY: ${chunk}`);
    })

    // end response'
    res.on('end', () => {
        console.log('No more data in response.')
    })
})

req.on('error', (e) => {
    `problem with request: ${e.message}`
})

// write data to request body
req.write(postData);
req.end();

