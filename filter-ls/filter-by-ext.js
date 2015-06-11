// Takes a callback function, directory, and file extension.
// Finds files in the given directory with the given given extension
// and passes the paths to said files to the callback function.

// The callback function will be called with the arguements(err, data)
// Where err is null if there errors and data is the list of filtered
// files.

var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            return callback(err);
        }
        
        var filteredfiles = files.filter(
            function(filePath) {
                return path.extname(filePath) == '.' + ext; 
            }
        );

        callback(null, filteredfiles);
    });
}
