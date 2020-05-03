const {
    Readable
} = require('stream');


const inStream = new Readable();

inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
inStream.push(null);

inStream.pipe(process.stdout);