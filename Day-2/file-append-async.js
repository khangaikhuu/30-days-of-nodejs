var fs = require('fs');

var new_data = "This data will be appended at the enf of the file";

fs.appendFile('input.txt', new_data, (err) => {
  if(err)
    throw err
  console.log('The content was appended successfully');
});
