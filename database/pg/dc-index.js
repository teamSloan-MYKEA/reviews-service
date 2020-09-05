const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  port: 5433,
});

client.connect()
  .catch(err => console.log(err));

const getReviewByIdDC = (id) => {
  return new Promise((resolve, reject) => {
    const qs = `SELECT * from reviews WHERE productid=${id}`;
    client.query(qs)
      .then(data => resolve(data.rows))
      .catch(err => reject(err));
  });
};

const postReviewToProductDC = (id, rev) => {
  return new Promise((resolve, reject) => {
    const qs = `SELECT * from reviews WHERE productid=${id}`;
    client.query(qs)
      .then(data => {
        let revArray = JSON.parse(data.rows[0].reviews);
        revArray.push(rev);
        let newArray = JSON.stringify(revArray);
        const pqs = `UPDATE reviews SET reviews='${newArray}' WHERE productid=${id};`;
        client.query(pqs)
          .then(data => resolve(data))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
};

module.exports = { getReviewByIdDC, postReviewToProductDC };
