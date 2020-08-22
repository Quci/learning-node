let fs = require('fs');

try {
    let data = fs.readFileSync('./apples.txt', 'utf8');
    console.log(data);
    let adjData = data.replace(/[Aa]pple/g, 'star');
    fs.writeFileSync('./star.txt', adjData);
} catch (e) {
    console.error(e);
}
