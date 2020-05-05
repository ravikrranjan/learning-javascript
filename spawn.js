const {
    spawn
} = require('child_process');

const child = spawn('find', ['.sd', '-type', 'f']);


child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
});

child.on('error', (error) => {
    console.error(`child error:\n${error}`);
});

child.on('message', (message, sendHandle) => {
    console.log(`child message:\n${message} sendHandle ${sendHandle}`);
})


child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.stderr