const fs = require('fs');
const zlib = require('zlib');
const {
    Transform
} = require('stream')
const file = process.argv[2];

console.log('file: ', file);

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.')
        callback(null, chunk);
    }
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(progress)
    // .on('data', () => process.stdout.write('.'))
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => console.log('Done'));