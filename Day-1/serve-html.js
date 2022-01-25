var http = require('http');
var fs = require('fs');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
  console.log('Port Number: 3000');

  response.writeHead(200, { 'Content-Type':'text/html'});

  fs.readFile('index.html', (err, data) => {
    if (err) {
      throw err
    } 
    console.log("Operation success");
    response.end(data);
  });
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log('Error occured : ', error);
  }

  console.log('server is listening on ' + host + ':' + port);
});
