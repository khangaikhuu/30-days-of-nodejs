const {log} = require('console');
var fs = require('fs');
var filename = 'content.txt';

fs.unlink(filename, (err) => {
  if(err)
    throw err
  log('File deleted successfully');
})
