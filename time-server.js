var net = require('net');
var strftime= require('strftime')
var port = process.argv[2];
var timeServer = net.createServer(function (socket) {
    console.log('Client connected from ' + socket.remoteAddress);
    socket.on('end', function() {
        console.log('Client disconnnected');
    });
    socket.write(strftime('%Y-%m-%d %H:%M\r\n'));
    socket.end();
});
timeServer.listen(port, function() {
    console.log('Server bound on port: ' + port);
});
