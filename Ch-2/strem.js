//Working with file streams

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'lorem.txt'), { encoding: 'utf8' });

const ws = fs.createWriteStream(path.join(__dirname, 'new_lorem.txt'));

rs.pipe(ws);