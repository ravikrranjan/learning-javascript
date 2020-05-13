// Causes the parent to print: PARENT got message: { foo: 'bar', baz: null }
process.send({
    foo: 'bar',
    baz: NaN
});

process.on('message', (m) => {
    console.log('CHILD got message:', m);
});

process.send({
    foo: '12',
    baz: NaN
});
process.send({
    foo: '13',
    baz: NaN
});