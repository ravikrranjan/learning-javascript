const Counter = require('./counter');
const pendingRequest = new Counter();

function increment() {
    pendingRequest.increment()
}
increment()

function decrement() {
    pendingRequest.decrement()
}
setTimeout(() => {
    decrement()
}, 2000)

pendingRequest.onceZero((r) => {
    console.log('-----log----', r);
});

const pendingCount = new Counter();

function decrementerr() {
    pendingCount.decrement()
}

pendingCount.onceZero(() => {
    console.log('------pendingCount--');
});

decrementerr();