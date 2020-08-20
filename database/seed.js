var db = require('../database');
var faker = require('faker');
var NPRODUCTS = 100;

var generateFakeReview = (productId) => {
  var review = {
    productId: productId,
    user: faker.internet.userName(),
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
  };

  return review;
};

var randScore = () => {
  return Math.floor(Math.random() * 5) + 1;
};

var generateFakeProductReviews = (id) => {
  var n = Math.floor(Math.random() * 100);
  return [...Array(n).keys()].map(() => generateFakeReview(id));
};

fakeReviews = [];
[...Array(NPRODUCTS).keys()].forEach((i) => {
  var id = i + 1;
  fakeReviews.push(...generateFakeProductReviews(id));
});

Promise.all(db.save(fakeReviews))
  .then((doc) => {
    console.log('Success!');
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });