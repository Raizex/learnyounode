var http = require('http');
var url = process.argv[2];

function logResponseData(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log(data);
    });
}

http.get(url, logResponseData);
