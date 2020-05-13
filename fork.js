const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.send({
    hello: '1'
});
n.send({
    hello: '2'
});
n.send({
    hello: '3'
});

n.on('message', (m) => {
    console.log('PARENT got message:', m);
});

// Causes the child to print: CHILD got message: { hello: 'world' }
n.send({
    hello: 'world'
});