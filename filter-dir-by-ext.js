var fs = require('fs');
var path = require('path');

function filterByExt (filePath) {
    return path.extname(filePath) == '.' + process.argv[3];
}

function filterFilesByExt (err, files) {
    if (err) {
        return console.log(err);
    }
    filteredFiles = files.filter(filterByExt);
    filteredFiles.forEach(function(file) { console.log(file) });
}

fs.readdir(process.argv[2], filterFilesByExt);

