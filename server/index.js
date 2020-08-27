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

app.post('/:id/reviews/:id', (req, res) => {
  const { _id, productId, user, date, head, body, stars, value, quality, appearance, expected, ease, helpful, unhelpful} = req.body;
  var id = path.basename(req.originalUrl);
  var query =
    {
      productId: productId,
      user: user,
      date: date,
      head: head,
      body: body,
      stars: stars,
      value: value,
      quality: quality,
      appearance: appearance,
      expected: expected,
      ease: ease,
      helpful: helpful,
      unhelpful: unhelpful,
    };
  db.Review.updateOne(query, (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.put('/:id/reviews/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  var query = {user: req.body.user};
  db.Review.findByIdAndUpdate("5f4698c007f6e74f7506314b", query, (err, data) => {
    if (err) {
      throw err;
      res.status(500).send('db error');
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete('/:id/reviews/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  db.Review.findByIdAndDelete("5f4698c007f6e74f7506314b", (err, data) => {
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