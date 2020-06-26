const AWS = require('aws-sdk');
const BUCKET_NAME = 'test_test';

const s3Client = new AWS.S3({
    credentials
});


// declare a function here
let resContent = await s3Client.selectObjectContent({
    Bucket: bucketName,
    Key: 'file.json',
    ExpressionType: 'SQL',
    Expression: 'SELECT s.* FROM S3Object[*][*] s WHERE s.column_name < 9 LIMIT 10',
    InputSerialization: {
        CompressionType: 'GZIP',
        JSON: {
            Type: 'DOCUMENT'
        }
    },
    OutputSerialization: {
        JSON: {
            RecordDelimiter: '\n'
        }
    }
}).promise();