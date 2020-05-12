function generateUUID() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join("-");
}

console.log(generateUUID())


    // https://github.com/GoogleChromeLabs/comlink/blob/master/src/comlink.ts