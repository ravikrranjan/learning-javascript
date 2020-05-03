const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) => {

    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;

    //     res.end(data);
    // })

    const file = fs.createReadStream('./big.file')
    file.pipe(res);
});

server.listen(8000)