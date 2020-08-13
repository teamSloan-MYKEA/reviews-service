var expect = require('chai').expect
var axios = require('axios');

describe('Fetching Data', () => {

  it('Returns all reviews in response to a GET request', function(done) {
    axios.get('http://localhost:8888/reviews')
      .then((res) => {
        var reviews = res.data;
        expect(reviews.length).to.eql(100);
        expect(reviews[0]).to.have.property('user')
        expect(reviews[0]).to.have.property('date')
        expect(reviews[0]).to.have.property('head')
        expect(reviews[0]).to.have.property('body')
        expect(reviews[0]).to.have.property('stars')
        expect(reviews[0]).to.have.property('value')
        expect(reviews[0]).to.have.property('quality')
        expect(reviews[0]).to.have.property('appearance')
        expect(reviews[0]).to.have.property('expected')
        expect(reviews[0]).to.have.property('ease')
        expect(reviews[0]).to.have.property('helpful')
        expect(reviews[0]).to.have.property('unhelpful')
        done();
      })
      .catch((err) => {
        return done(err);
      });
  });
});
