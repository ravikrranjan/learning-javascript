const fs = require("fs");
const zlib = require('zlib');
const {
    Transform
} = require('stream')
//a dialog box module from electron
const {
    dialog
} = require("electron").remote;



const checkFileExit = (filePath) => {


    // Check whether folder for the file exists.
    if (!filePath) return false;
    // Checks file and return a results.
    return fs.existsSync(filePath);
}

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.')
        callback(null, chunk);
    }
});

const doZip = (file) => {
    if (!file || !checkFileExit(file)) return;

    fs.createReadStream(file)
        .on('error', (err) => process.stderr.write(`${err}`))
        .pipe(zlib.createGzip())
        .pipe(progress)
        .pipe(fs.createWriteStream(file + '.gz'))
        .on('finish', () => console.log('Done'))
}

document.getElementById("mybutton").addEventListener("click", () => {

    //launch save dialog window
    dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory', 'multiSelections']
    }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
        const filePaths = result.filePaths;

        if (!filePaths || !filePaths.length) return;

        for (let filePath of filePaths) {
            doZip(filePath);
        }

    }).catch(err => {
        console.log(err)
    })

});