const fs = require('fs');

module.exports = function(fileName) {
  fs.readFile(`./${fileName}`, 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;
    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
  });
}

