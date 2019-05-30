const express = require('express');
const app = express();

app.use(express.static('public/'));
const PORT = 3999;

app.listen(PORT, () => {
  console.log('in server listening on: ', PORT);
});