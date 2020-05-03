const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e6; i++) {

    file.write('Today india 03 May!')
}

file.end();