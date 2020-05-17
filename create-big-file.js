const fs = require('fs');
const file = fs.createWriteStream('./big-1mb.file');

for (let i = 0; i <= 1e4; i++) {

    file.write(' Today india 03 MayToday india 03 May!Today india 03 MayToday india 03 May')
}

file.end();