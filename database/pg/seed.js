/* eslint-disable func-style */
const initOptions = {
  capSQL: true,
};

const faker = require('faker');
const pgp = require('pg-promise')(initOptions);

const db = pgp({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  database: 'sdc',
  port: 5433,
});

const cs = new pgp.helpers.ColumnSet([
  'productid',
  'username',
  'date',
  'head',
  'body',
  'stars',
  'value',
  'quality',
  'appearance',
  'expected',
  'ease',
  'helpful',
  'unhelpful',
], {table: 'reviews'});

var randScore = () => {
  return Math.floor(Math.random() * 5) + 1;
};

function getNextData (t, pageIndex) {
  let data = null;
  if (pageIndex < 1000) {
    data = [];
    for (let i = 0; i < 1000; i++) {
      const idx = pageIndex * 1000 + i;
      data.push({
        productid: idx,
        username: faker.internet.userName(),
        date: faker.date.past(),
        head: faker.lorem.words(),
        body: faker.lorem.paragraphs(),
        stars: randScore(),
        value: randScore(),
        quality: randScore(),
        appearance: randScore(),
        expected: randScore(),
        ease: randScore(),
        helpful: Math.floor(Math.random() * 25),
        unhelpful: Math.floor(Math.random() * 25)
      });
    }
    console.log(data[0].productid);
  }
  return Promise.resolve(data);
}

db.tx('massive-insert', t => {
  const processData = data => {
    if (data) {
      const insert = pgp.helpers.insert(data, cs);
      return t.none(insert);
    }
  };
  return t.sequence(index => getNextData(t, index).then(processData));
})
  .then(data => {
    console.log('Duration:', data.duration);
  })
  .catch(error => {
    console.log(error);
  });