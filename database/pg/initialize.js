const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'sdc',
  port: 5433,
});

client.connect();

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
    console.log('Table is successful');
  })
  .catch(err => {
    console.log(err);
  });

client
  .query(vacuumer)
  .then(res => {
    console.log('table vacuumed');
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    client.end;
  });

// const { Client } = require('pg');
// const path = require('path');

// const client = new Client({
//   user: 'postgres',
//   password: 'postgres',
//   host: 'localhost',
//   database: 'sdc',
//   port: 5433,
// });

// client.connect();

// const schema = `
// DROP TABLE IF EXISTS reviews;
// CREATE TABLE reviews (
//   productid SERIAL PRIMARY KEY,
//   username text,
//   date text,
//   head text,
//   body text,
//   stars int,
//   value int,
//   quality int,
//   appearance int,
//   expected int,
//   ease int,
//   helpful int,
//   unhelpful int
// );
// `;

// const vacuumer = 'VACUUM (ANALYZE) reviews';

// client
//   .query(schema)
//   .then(res => {
//     console.log('Table is successful');
//   })
//   .catch(err => {
//     console.log(err);
//   });

// client
//   .query(vacuumer)
//   .then(res => {
//     console.log('table vacuumed');
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     client.end;
//   });
