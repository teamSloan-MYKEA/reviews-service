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

const getReviewById = (id) => {
  return new Promise((resolve, reject) => {
    const qs = `SELECT * from reviews WHERE productid=${id}`;
    client.query(qs)
      .then(data => resolve(data.rows))
      .catch(err => { reject(err); } );
  });
};

module.exports = { getReviewById };
