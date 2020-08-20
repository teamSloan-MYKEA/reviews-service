var getStats = (reviews) => {
  // Calculate average scores
  console.log('getStats', reviews);
  var scores = [
    'stars',
    'value',
    'quality',
    'appearance',
    'expected',
    'ease',
  ]
  var avgs = {};
  scores.forEach(s => {
    avgs[s] = getAvg(reviews, s);
  });

  // Create star histogram
  var starHist = reviews.reduce((memo, r) => {
    memo[r.stars] = memo[r.stars] + 1 || 1;
    return memo
  }, {});
  [1, 2, 3, 4, 5].forEach(i => starHist[i] = starHist[i] || 0);

  // find most helpful favorable and unfavorable reviews
  var mostHelpful = reviews.reduce((memo, r) => {
    if (r.stars > 3) {
      memo.fav = memo.fav || r;
      memo.fav = r.helpful > memo.fav.helpful ? r : memo.fav;
    } else {
      memo.unfav = memo.unfav || r;
      memo.unfav = r.helpful > memo.unfav.helpful ? r : memo.unfav;
    }
    return memo;
  }, {});

  mostHelpful.fav = mostHelpful.fav || mostHelpful.unfav // if data hasn't been fetched yet

  return {
    n: reviews.length,
    avgs: avgs,
    starHist: starHist,
    mostHelpful: mostHelpful,
  }
}

var getAvg = (reviews, key) => {
  var avg = reviews.map(r => r[key]).reduce((memo, s) => {
    return memo + s;
  }) / reviews.length;
  return (Math.round(avg * 10) / 10).toFixed(1);
}

module.exports = {
  getStats: getStats
}