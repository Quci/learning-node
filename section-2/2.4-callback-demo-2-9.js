let fs = require('fs');
fs.readFile('./apples.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        let adjData = data.replace(/[Aa]pple/g, 'star');
        fs.writeFile('./star.txt', adjData, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
});
