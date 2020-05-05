const {
    spawn
} = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l', '-c']);

// -l, --lines - Print the number of lines. -
// w, --words - Print the number of words. -
// m, --chars - Print the number of characters. -
// c, --bytes - Print the number of bytes. -
// L, --max - line - length - Print the length of the longest line.

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log(`Number of files ${data}`);
});