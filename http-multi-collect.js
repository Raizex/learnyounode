var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var activeUrls = urls.length;
var responses = [];

urls.forEach(function(url, i){
    function printData (response) {
        response.pipe(bl(function (err, data) {
            if(err) {return console.error(err)};
        
            responses[i] = data;
            activeUrls--;
            if(activeUrls==0) {
                responses.forEach(function (response) {
                    console.log(response.toString());
                });
            }
        }));
    }

    http.get(url, printData);
});
