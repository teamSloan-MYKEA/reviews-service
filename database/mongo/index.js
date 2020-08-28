var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mykea-reviews');

var reviewSchema = new mongoose.Schema({
  productId: Number,
  user: String,
  date: Date,
  head: String,
  body: String,
  stars: {type: Number, min: 1, max: 5},
  value: {type: Number, min: 1, max: 5},
  quality: {type: Number, min: 1, max: 5},
  appearance: {type: Number, min: 1, max: 5},
  expected: {type: Number, min: 1, max: 5},
  ease: {type: Number, min: 1, max: 5},
  helpful: Number,
  unhelpful: Number
});

var Review = mongoose.model('Review', reviewSchema);

var save = (reviews) => {
  return reviews.map(r => {
    return new Promise((resolve, reject) => {
      row = new Review(r);
      row.save((err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  });
};

module.exports.Review = Review;
module.exports.save = save;
