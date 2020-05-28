const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const {
    exec
} = require('child_process');

const util = require('util');
const execPromisify = util.promisify(exec);

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

    awsChildOperation() {

        exec('aws s3 ls s3://zax-file-data', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }



    async lsBucket() {
        const {
            stdout,
            stderr
        } = await execPromisify("aws s3 ls s3://zax-file-data | awk '{$1=$2=$3=\"\"; print $0}' | sed 's/^[ \t]*//'");
        console.log(`\n stdout:`, stdout);
        console.error(`\nstderr:`, stderr);
    }
}

let instance = new BucketOperation();

instance.lsBucket();