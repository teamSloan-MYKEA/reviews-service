var db = require('../database');
var faker = require('faker');
var NREVIEWS = 100;

var generateFakeReview = () => {
  var review = {
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
}

var fakeReviews = [...Array(NREVIEWS).keys()].map(() => {
  return generateFakeReview();
});

Promise.all(db.save(fakeReviews))
  .then((doc) => {
    console.log('Success!');
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });