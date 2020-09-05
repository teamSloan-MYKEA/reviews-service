const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  port: 5434,
});

client.connect()
  .catch(err => console.log(err));

const getReviewByIdMC = (id) => {
  return new Promise((resolve, reject) => {
    const qs = `SELECT * from reviews WHERE uniqueid>=${id * 10} AND uniqueid<${id * 10 + 10}`;
    client.query(qs)
      .then(data => resolve(data.rows))
      .catch(err => reject(err));
  });
};

const postReviewToProductMC = (id, rev) => {
  return new Promise((resolve, reject) => {
    const pqs = `INSERT INTO reviews (productid, username, date, head, body, stars, value, quality, appearance, expected, ease, helpful, unhelpful) VALUES (${rev.productid},(${rev.username},(${rev.date},(${rev.head},(${rev.body},(${rev.stars},(${rev.value},(${rev.quality},(${rev.appearance},(${rev.expected},(${rev.ease},(${rev.helpful},(${rev.unhelpful},)`;
    client.query(pqs)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

module.exports = { getReviewByIdMC, postReviewToProductMC };
