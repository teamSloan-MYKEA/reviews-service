const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  database: 'sdc',
  port: 5434,
});

client.connect();

const schema = `
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  productid int,
  uniqueid SERIAL PRIMARY KEY,
  username text,
  date text,
  head text,
  body text,
  stars int,
  value int,
  quality int,
  appearance int,
  expected int,
  ease int,
  helpful int,
  unhelpful int
);
`;

const vacuumer = 'VACUUM (ANALYZE) reviews';

client
  .query(schema)
  .then(res => {
    console.log('multi-column schema is successful');
  })
  .catch(err => {
    console.log(err);
  });

client
  .query(vacuumer)
  .then(res => {
    console.log('table is vacuumed for you');
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    client.end;
  });
