const readFile = require('./read.js');
const createEntry = require('./create.js');
const deleteEntry = require('./delete.js');
const updateEntry = require('./update.js');

const app = process.argv[2];

if (app === 'read') {
  readFile();
} else if (app === 'create') {
  createEntry(process.argv[3]);
} else if (app === 'update') {
  updateEntry(process.argv[3], process.argv[4]);
} else if (app === 'delete') {
  deleteEntry(process.argv[3]);
} else {
  console.log('invalid input');
}
