// systeemikirjaston tuonti requirella
let http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(9020, '127.0.0.1');