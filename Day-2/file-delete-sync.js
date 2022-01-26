const {log} = require('console');
var fs = require('fs');
var filename = 'data.txt';
fs.unlinkSync(filename);

log('File deleted successfully');
