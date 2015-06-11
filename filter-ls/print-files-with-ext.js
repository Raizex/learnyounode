var filterByExt = require('./filter-by-ext.js');
var dir = process.argv[2];
var ext = process.argv[3];

// Print the filenames in the given list of files.`
function printFileNames (err, filenames) {
    if (err) {
        return console.error('Error: ', err);
    }
    filenames.forEach(function(filename) {console.log(filename)});
}

filterByExt(dir, ext, printFileNames);
