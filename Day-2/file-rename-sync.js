const {log} = require('console');
var fs = require('fs');

fs.renameSync('data.txt', 'newData.txt');
log("File renamed successfully");

log("This method is synchronously");
