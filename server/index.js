var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database');
var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
var port = 8888;

app.get('/reviews', (req, res) => {
  db.Review.find(req.query, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})