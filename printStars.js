const print = (stars, header) => {

    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
};

// console.log(require.main == module);


if (require.main == module) { // called from command line `node printStars.js`
    print(process.argv[2], process.argv[3]); //node printStars.js 5 Hi!
} else {
    module.exports = print;
}