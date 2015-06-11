var http = require('http');
var bl = require('bl');
var url = process.argv[2];

function printData (response) {
    response.pipe(bl(function (err, data) {
        if(err) {return console.error(err)};
        console.log(data.length);
        console.log(data.toString());
    }));
}

http.get(url, printData);
