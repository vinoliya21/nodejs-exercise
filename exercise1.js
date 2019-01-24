var http =require('http');
var sample = require('./exer1.js');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.write("Sum Number = " + sample.sumNum(123 , 321));
 res.write(" Average Number is = " + sample.average(123,321));
 res.end();
}).listen(8080);
