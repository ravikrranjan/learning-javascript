const fs = require('fs');
const file = fs.createWriteStream('./big-1mb.file');

for (let i = 0; i <= 1e5; i++) {

    file.write('Today india 03 May!')
}

file.end();