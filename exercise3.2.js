var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
  fs.readFile('ukinode.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Welcome to Uki, I'm Vinoliya ");
    res.write(data);
    res.end();
  });
}).listen(8000);
