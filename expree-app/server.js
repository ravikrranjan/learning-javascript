const express = require('express');
const fs = require("fs");
const app = express()
const port = 3000;
const cors = require('cors')
const {
    fork
} = require("child_process")
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/post', async (req, res) => {
    // res.send('Get Post!')

    try {

        var params = {
            Bucket: 'zax-file-data',
            Key: 'big-1mb.file'
        }
        s3.getObject(params).createReadStream().pipe(res);
        // console.log(s3file.Body);//

        // res.send(s3file.Body)
        // const file = fs.createReadStream('../big.file')
        // file.pipe(res);

        // getChildMessage(res);

    } catch (err) {
        res.send(`errr : ${err}`)
    }


})

async function getChildMessage(res) {

    process.stdout.write(`\n call s3--started--\n`)
    let child = fork(`${__dirname}/child-process.js`);

    child.send({
        "data": "Parent message"
    });
    child.stdout.createReadStream().pipe(res)
    // child.createReadStream().pipe(res);
    // res.send('---call s3--started')
    // child.on("message", async (total) => {
    //     console.log(`\n---child message-`);
    //     // res.send(total)
    //     res.send(total)
    // });
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))