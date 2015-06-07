// Require file system module
var fs = require('fs');

// Read file into a buffer and convert to string
var filepath = process.argv[2];
var buffer = fs.readFileSync(filepath);
var string = buffer.toString();
// console.log(string);

// Split string by line and report the number of lines
var stringSplitByLine = string.split('\n');
var numberOfLines = stringSplitByLine.length - 1;
console.log(numberOfLines);
