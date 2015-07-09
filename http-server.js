var http = require('http');
var port = process.argv[2];
var server = http.createServer(function (req, res) {
});
server.listen(port, function() {
    console.log('Server bound on port ' + port);
});
