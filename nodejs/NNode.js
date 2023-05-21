var http = require('http');

var dt = require('./MObject');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Marca: " + dt.brand);
  res.write("<br/>Modelo: " + dt.model);
  res.write("<br/>Ano: " + dt.year);
  res.write("<br/>Cor: " + dt.color);
  res.end();
}).listen(8080);

exports.myDateTime = function () {
  return new Date().toLocaleTimeString();
};

