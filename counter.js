const EventEmitter = require('events').EventEmitter

class Counter extends EventEmitter {

    constructor() {
        super();
        this.value = 0
        this.zeroEvent = Symbol('zero');
        console.log(this.zeroEvent);

    }

    increment() {
        this.value++;
    }

    decrement() {
        if (--this.value === 0) this.emit(this.zeroEvent)
    }

    isZero() {
        return (this.value === 0)
    }
    onceZero(fn) {
        if (this.isZero()) return fn()
        this.once(this.zeroEvent, fn)
    }
}

module.exports = Counter;