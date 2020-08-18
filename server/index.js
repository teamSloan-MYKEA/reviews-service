var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('../database');
var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(cors());
var port = 3002;

app.get('/reviews', (req, res) => {
  db.Review.find(req.query, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(data);
    }
  });
});

app.use('/:id', express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})