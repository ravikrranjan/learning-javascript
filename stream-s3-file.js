const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3();

const bucket = "test-1213445"; // always use lowercase

class BucketOperation {

    writeObjectStreamToFile() {

        let param = {
            Bucket: `${bucket}`,
            Key: "SampleFile.txt",
        }
        let outFile = path.join(__dirname, `${outFile.txt}`);
        let writeFileStream = fs.writeFileStream(outFile);

        let readStream = s3.getObject().getObjectStream();

        readStream.pipe(writeFileStream);

        readStream.on("finish", (err) => {
            console.log(`\n Finish: readStream- `, err);

        })

        readStream.on("error", (err) => {
            console.log(`\n Error: readStream- `, err);

        })

    }
}