var net = require('net');
var port = process.argv[2];
var timeServer = net.createServer(function (socket) {
    console.log('Client connected from ' + socket.remoteAddress);
    socket.on('end', function() {
        console.log('Client disconnnected');
    });
    socket.write('hello\r\n');
});
timeServer.listen(port, function() {
    console.log('Server bound on port: ' + port);
});
