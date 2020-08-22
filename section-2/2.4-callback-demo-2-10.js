let fs = require('fs');
let writeStream = fs.createWriteStream('./log.txt',
    {
        flag: 'a',
        encoding: 'utf8',
        'mode': 0o666
    }
)

writeStream.on('open', () => {
    // get list of file
    fs.readdir('./data/', (err, files) => {
        // for each file
        if (err) {
            console.log(err.message)
        } else {
            files.forEach((name) => {
                // modify contents
                fs.readFile(`./data/${name}`, 'utf8', (err, data) => {
                    let adjData = data.replace(/burningbird\.com/g, 'shinyStar.net');
                    // write to file
                    fs.writeFile(`./data/${name}`, adjData, (err) => {
                        if (err) {
                            console.error(err.message);
                        } else {
                            writeStream.write(`change ${name} \n`, 'utf8', (err) => {
                                if (err) {
                                    console.error(err);
                                }
                            })
                        }
                    })
                })
            })
        }
    })
})

writeStream.on('error', (err) => {
    console.error(err);
})
