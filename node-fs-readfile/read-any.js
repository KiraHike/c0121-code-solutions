const fs = require('fs');

function read(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

read(process.argv[2]);
