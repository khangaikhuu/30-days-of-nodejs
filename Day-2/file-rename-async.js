const {log} = require('console');
var fs = require('fs');
fs.rename('data.txt', 'new_data.txt', (err) => {
  if (err)
    throw err
  console.log('File renamed successfully!')
});

log("This method is asynchronously")
