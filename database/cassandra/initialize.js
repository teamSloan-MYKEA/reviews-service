const cassandra = require('cassandra-driver');
const contactPoints = ['localhost'];

const client = new cassandra.Client({
  contactPoints: contactPoints,
  localDataCenter: 'datacenter1',
  keyspace: 'sdc'
});


const drop = `
  DROP TABLE IF EXISTS sdc.reviews;
`;

client.execute(drop)
  .then((d) => console.log('success dropping'))
  .catch((d) => console.log(d));

const build = `
  CREATE TABLE sdc.reviews (
    productid int PRIMARY KEY,
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

client.execute(build)
  .then((d) => console.log('success building'))
  .catch((d) => console.log(d));
