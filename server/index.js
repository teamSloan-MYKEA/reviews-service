var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var pgdb = require('../database/pg');
var path = require('path');
var app = express();
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(cors());
var port = 3002;

app.use('/:id', express.static(__dirname + '/../public'));

app.get('/:id/reviews/:id', (req, res) => {
  var id = path.basename(req.originalUrl);
  pgdb.getReviewById(id)
    .then(rows => res.status(200).send(rows))
    .catch(err => res.status(500).send('error'));
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});