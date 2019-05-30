const express = require('express');
const app = express();

app.use('/ak', express.static('../reviewList-ak/client/dist/style.css/'));
app.use(express.static('public/'));

const PORT = 3999;
const cors = require('cors');

app.use(cors());
app.listen(PORT, () => {
  console.log('in server listening on: ', PORT);
});