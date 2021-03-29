const express = require('express');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, 'public');

const getPublicDir = express.static(publicDir);

app.use(getPublicDir);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000');
});
