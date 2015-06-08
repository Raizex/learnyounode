// Require file system module
var fs = require('fs');

// Define callback function
function printNumberOfLinesInFile(error, file_buffer) {
    if(error) {
        return console.log(error);
    } else {
        return console.log(file_buffer.toString().split('\n').length - 1);
    }
}

// Read file and pass callback function
fs.readFile(process.argv[2], printNumberOfLinesInFile);
