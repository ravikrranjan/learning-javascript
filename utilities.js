const fs = require('fs');
const path = require('path');
const Readable = require('stream').Readable;
/**
 * Creates a folder for file specified in the path variable
 * @param {string} filePath
 * @returns {boolean}
 */
const checkAndMakeDir = (filePath) => {

  // Check whether folder for the file exists.
  if (!filePath) return false;
  const parentPath = path.dirname(filePath);
  // Create folder if it is not exists.
  if (!fs.existsSync(parentPath)) {
    fs.mkdirSync(
      parentPath, {
        recursive: true
      }
    );
  }
  // Checks folder again and return a results.
  return fs.existsSync(parentPath);
};

/**
 * Delete file.
 * @param {string} file - Path to the file to delete.
 */
const deleteFile = (file, callback) => fs.unlink(file, err => err ? callback(err) : callback());

/**
 * Copy file via streams
 * @param {string} src - Path to the source file
 * @param {string} dst - Path to the destination file.
 */
const copyFile = (src, dst, callback) => {
  // cbCalled flag and runCb helps to run cb only once.
  let cbCalled = false;
  let runCb = (err) => {
    if (cbCalled) return;
    cbCalled = true;
    callback(err);
  };
  // Create read stream
  let readable = fs.createReadStream(src);
  readable.on('error', runCb);
  // Create write stream
  let writable = fs.createWriteStream(dst);
  writable.on('error', (err) => {
    readable.destroy();
    runCb(err);
  });
  writable.on('close', () => runCb());
  // Copy file via piping streams.
  readable.pipe(writable);
};

/**
 * moveFile - moves the file from src to dst.
 * Firstly trying to rename the file if no luck copying it to dst and then deleteing src.
 * @param {string} src - Path to the source file
 * @param {string} dst - Path to the destination file.
 * @param {Function} callback - A callback function.
 */
const moveFile = (src, dst, callback) => fs.rename(src, dst, err => (!err ?
  callback() :
  copyFile(src, dst, err => err ? callback(err) : deleteFile(src, callback))
));

/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */
const saveBufferToFile = (buffer, filePath, callback) => {
  if (!Buffer.isBuffer(buffer)) {
    return callback(new Error('buffer variable should be type of Buffer!'));
  }
  // Setup readable stream from buffer.
  let streamData = buffer;
  let readStream = Readable();
  readStream._read = () => {
    readStream.push(streamData);
    streamData = null;
  };
  // Setup file system writable stream.
  let fstream = fs.createWriteStream(filePath);
  fstream.on('error', error => callback(error));
  fstream.on('close', () => callback());
  // Copy file via piping streams.
  readStream.pipe(fstream);
};

/**
 * Generates unique temporary file name like: tmp-5000-156788789789.
 * @param {string} prefix - a prefix for generated unique file name.
 * @returns {string}
 */
const getTempFilename = (prefix) => {
  tempCounter = tempCounter >= TEMP_COUNTER_MAX ? 1 : tempCounter + 1;
  return `${prefix || TEMP_PREFIX}-${tempCounter}-${Date.now()}`;
};