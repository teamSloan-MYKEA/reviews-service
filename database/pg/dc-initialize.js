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
  .catch((err) => console.log(err));

const schema = `
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  productid SERIAL PRIMARY KEY,
  reviews varchar
);
`;

const vacuumer = 'VACUUM (ANALYZE) reviews';

client
  .query(schema)
  .then(res => {
    console.log('double column schema is successful');
  })
  .catch(err => {
    console.log(err);
  });

client
  .query(vacuumer)
  .then(res => {
    console.log('the table vacuumed is for you');
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    client.end;
  });
