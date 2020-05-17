const express = require('express');
const bodyParser = require('body-parser')
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


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})) //

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/post', (req, res) => {
    console.log('---req.body--', req.query.id, req.params, new Date());
    // res.send('Get Post!')
    let {
        id
    } = req.query;


    if (!id) {
        res.status(200).end()
        return;
    }
    console.log(id);

    try {

        console.log(id);

        var params = {
            Bucket: 'zax-file-data',
            // Key: 'big-700KB'
            Key: `big_${id}`
        }

        // var file = fs.createWriteStream(`file__${i}.jpg`);
        // setTimeout(() => {
        let s3Stream = s3.getObject(params).createReadStream();
        // s3Stream.pipe(file);
        // fs.writeFileSync(filePath, data.Body.toString());
        // console.log(s3file.Body);//

        // res.send(s3file.Body)
        res.attachment(`big_${id}`);
        // const file2 = fs.createReadStream(`file__${i}.jpg`)
        s3Stream.pipe(res);
        // }, 2000);
        // getChildMessage(res);

        // res.status(200).end();

    } catch (err) {
        res.send(`errr : ${err}`)
    }


})

app.get('/post', (req, res) => {
    console.log('---req.body--', req.query.id, req.params, new Date());
    // res.send('Get Post!')
    let {
        id
    } = req.query;


    if (!id) {
        res.status(200).end()
        return;
    }
    console.log(id);

    try {

        console.log(id);

        var params = {
            Bucket: 'zax-file-data',
            // Key: 'big-700KB'
            Key: `big_${id}`
        }

        // var file = fs.createWriteStream(`file__${i}.jpg`);
        // setTimeout(() => {
        let s3Stream = s3.getObject(params).createReadStream();
        // s3Stream.pipe(file);
        // fs.writeFileSync(filePath, data.Body.toString());
        // console.log(s3file.Body);//

        // res.send(s3file.Body)
        res.attachment(`big_${id}`);
        // const file2 = fs.createReadStream(`file__${i}.jpg`)
        s3Stream.pipe(res);
        // }, 2000);
        // getChildMessage(res);

        // res.status(200).end();

    } catch (err) {
        res.send(`errr : ${err}`)
    }


})

app.get('/post2', (req, res) => {
    console.log('---req.body--', req.query.id, req.params, new Date());
    // res.send('Get Post!')
    let {
        id
    } = req.query;


    if (!id) {
        res.status(200).end()
        return;
    }
    console.log(id);

    try {

        console.log(id);

        var params = {
            Bucket: 'zax-file-data',
            // Key: 'big-700KB'
            Key: `big_${id}`
        }

        // var file = fs.createWriteStream(`file__${i}.jpg`);
        // setTimeout(() => {
        let s3Stream = s3.getObject(params).createReadStream();
        // s3Stream.pipe(file);
        // fs.writeFileSync(filePath, data.Body.toString());
        // console.log(s3file.Body);//

        // res.send(s3file.Body)
        res.attachment(`big_${id}`);
        // const file2 = fs.createReadStream(`file__${i}.jpg`)
        s3Stream.pipe(res);
        // }, 2000);
        // getChildMessage(res);

        // res.status(200).end();

    } catch (err) {
        res.send(`errr : ${err}`)
    }


})

app.get('/post1', (req, res) => {
    console.log('---req.body--', req.query.id, req.params, new Date());
    // res.send('Get Post!')
    let {
        id
    } = req.query;


    if (!id) {
        res.status(200).end()
        return;
    }
    console.log(id);

    try {

        console.log(id);

        var params = {
            Bucket: 'zax-file-data',
            // Key: 'big-700KB'
            Key: `big_${id}`
        }

        // var file = fs.createWriteStream(`file__${i}.jpg`);
        // setTimeout(() => {
        let s3Stream = s3.getObject(params).createReadStream();
        // s3Stream.pipe(file);
        // fs.writeFileSync(filePath, data.Body.toString());
        // console.log(s3file.Body);//

        // res.send(s3file.Body)
        res.attachment(`big_${id}`);
        // const file2 = fs.createReadStream(`file__${i}.jpg`)
        s3Stream.pipe(res);
        // }, 2000);
        // getChildMessage(res);

        // res.status(200).end();

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