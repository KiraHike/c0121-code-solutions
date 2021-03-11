const fs = require('fs');

const allFiles = process.argv;

function readAll(files) {
  const completedArray = [];
  for (let i = 2; i < files.length; i++) {
    fs.readFile(files[i], 'utf8', (err, data) => {
      if (err) throw err;
      completedArray[i] = data;
      if (files.length === completedArray.length) {
        for (i = 2; i < completedArray.length; i++) {
          console.log(completedArray[i]);
        }
      }
    });
  }
}

readAll(allFiles);
