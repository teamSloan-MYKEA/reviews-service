var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('../database');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(cors());
var port = 3002;

app.use('/:id', express.static(__dirname + '/../public'));

app.get('/:id/reviews/:id', (req, res) => {
  var id = path.basename(req.originalUrl);
  var query = {productId: id};
  db.Review.find(query, (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})