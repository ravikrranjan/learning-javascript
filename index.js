const http = require('http');
const chalk = require("chalk");
const readline = require('readline');

const HOST = '0.0.0.0';
const port = 3000;

const createServer = (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        'foods': ['Rice', 'Wheat', 'Lemon']
    }));
};



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.yellow(`Enter port number: `), (port) => {
    port = port || 3000;
    const server = http.createServer(createServer);
    server.listen(port, HOST, () => {
        process.stdout.write(chalk.green(`Server running at`) + " " + chalk.blue.underline.bold(`http://${HOST}:${port}`));
    });
    rl.close();
});