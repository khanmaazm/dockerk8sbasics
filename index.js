const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8082, () => {
  console.log('Listening on port 8082');
});
