require('newrelic');

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
// const cors = require('cors');
const pgdb = require('../database/pg/dc-index.js');
const path = require('path');
const app = express();
const port = 3002;

app.use(compression());
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
// app.use(cors());

app.use('/:id', express.static(__dirname + '/../public'));

app.get('/:id/reviews/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  pgdb.getReviewByIdDC(id)
    .then(row => {
      let raw = row[0].reviews;
      let parsed = JSON.parse(raw);
      res.send(parsed);
    })
    .catch(err => res.status(500).send('error'));
});

app.post('/:id/reviews/:id', (req, res) => {
  const id = path.basename(req.originalUrl);
  const rev = req.body;
  pgdb.postReviewToProductDC(id, rev)
    .then(row => res.status(200).send('posted'))
    .catch(err => res.status(500).send('error'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
