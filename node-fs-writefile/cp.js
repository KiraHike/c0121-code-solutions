const fs = require('fs');

function copyFile(originalFile, copiedFile) {
  fs.readFile(originalFile, 'utf8', (err, data) => {
    if (err) throw err;
    const fileData = data;
    fs.writeFile(copiedFile, fileData, err => {
      if (err) throw err;
    });
  });
}

copyFile(process.argv[2], process.argv[3]);
