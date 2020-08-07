var express = require('express');
var app = express();
var port = 8888;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/reviews', (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})