var db = require('../database');
var faker = require('faker');
var NREVIEWS = 100;

var generateFakeReview = () => {
  var review = {
    user: faker.internet.userName(),
    date: faker.date.past(),
    head: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    stars: Math.floor(Math.random() * 5) + 1,
    value: Math.floor(Math.random() * 5) + 1,
    quality: Math.floor(Math.random() * 5) + 1,
    appearance: Math.floor(Math.random() * 5) + 1,
    expected: Math.floor(Math.random() * 5) + 1,
    ease: Math.floor(Math.random() * 5) + 1,
    helpful: Math.floor(Math.random() * 25),
    unhelpful: Math.floor(Math.random() * 25)
  };
  return review;
};


var fakeReviews = [...Array(NREVIEWS).keys()].map(() => {
  return generateFakeReview();
});

console.log(fakeReviews);

// Load Database

Promise.all(db.save(fakeReviews))
  .then((doc) => {
    console.log('Success!');
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });