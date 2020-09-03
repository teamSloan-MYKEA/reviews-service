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
      .catch(err => { reject(err); } );
  });
};

module.exports = { getReviewByIdMC };
