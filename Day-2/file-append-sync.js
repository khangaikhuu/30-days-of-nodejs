var fs = require('fs');
var content = "We are appending this file synchronously using nodejs";
fs.appendFileSync('input.txt', content);
console.log("File Appended Successfully");
