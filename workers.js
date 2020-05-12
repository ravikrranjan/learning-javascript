let workers = [];
for (let i = 0; i < 500; i++) {
    let worker = new Worker(URL.createObjectURL(new Blob([`console.log('cool${i}')`])));
    worker.postMessage({});
    workers.push(worker);
}
await new Promise(r => setTimeout(r, 15000));
for (let i = 0; i < workers.length; i++) {
    workers[i].terminate();
}