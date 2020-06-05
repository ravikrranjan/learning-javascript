const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"


const getLambdaDocs = () => {

    const promise = new Promise(function (resolve, reject) {
        https.get(url, (res) => {
            resolve(res.statusCode)
        }).on('error', (e) => {
            reject(Error(e))
        })
    })
    return promise
}

exports.handler = async (event) => {
    console.log(`\n handler: ---`)
    console.log(`\n ENV: ---`, process.env)
    let lambdaDocs = await getLambdaDocs();

    console.log(`\n lambdaDocs: `, lambdaDocs)
}