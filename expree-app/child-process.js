const AWS = require("aws-sdk");
const s3 = new AWS.S3();

process.on("message", async (parent_data) => {
    // let total = [];
    // for (let i = 0; i < 1e6; i++) {
    //     total.push(i)
    // }
    // process.send({
    //     total
    // })

    console.log('---parent_data--');


    var params = {
        Bucket: 'zax-file-data',
        Key: 'big-1mb.file'
    }
    // const s3file = await s3.getObject(params).promise();

    s3.getObject(params).createReadStream().pipe(process.stdout)
    // console.log('---s3-resonse');
    // process.send(
    //     s3file.Body
    // )

});