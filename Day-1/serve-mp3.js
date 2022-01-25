var http = require('http');
var fs = require('fs');

var host = '127.0.0.1'
var port = 3000

var server = http.createServer((request, response) => {
  console.log('Port Number: 3000');

  response.writeHead(200, { 'Content-Type':'audio/mp3'});

  fs.exists('audio.mp3', (exists) => {
    if (exists) {
      var rstream = fs.createReadStream('audio.mp3')
      rstream.pipe(res);
    } else  {
      response.end('Its a 404');
    }
  });
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log('Error occured : ', error);
  }

  console.log('server is listening on ' + host + ':' + port);
});
