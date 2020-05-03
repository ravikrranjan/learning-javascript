const fs = require('fs');
const crypto = require('crypto');
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
    .pipe(crypto.createCipher('aes192', 'a_secret'))
    .pipe(progress)
    .pipe(fs.createWriteStream(file + '.zz'))
    .on('finish', () => console.log('Done'));