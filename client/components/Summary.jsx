import React from 'react';
import Snapshot from './Snapshot.jsx';
import StarBar from './StarBar.jsx';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.stats = {};
  }

  getStats() {
    // Calculate average scores
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
      avgs[s] = this.getAvg(s);
    });

    // Create star histogram
    var starHist = this.props.reviews.reduce((memo, r) => {
      memo[r.stars] = memo[r.stars] + 1 || 1;
      return memo
    }, {});
    [1, 2, 3, 4, 5].forEach(i => starHist[i] = starHist[i] || 0);

    // find most helpful favorable and unfavorable reviews
    var mostHelpful = this.props.reviews.reduce((memo, r) => {
      if (r.stars > 3) {
        memo.fav = memo.fav || r;
        memo.fav = r.helpful > memo.fav.helpful ? r : memo.fav;
      } else {
        memo.unfav = memo.unfav || r;
        memo.unfav = r.helpful > memo.unfav.helpful ? r : memo.unfav;
      }
      return memo;
    }, {});

    this.stats = {
      n: this.props.reviews.length,
      avgs: avgs,
      starHist: starHist,
      mostHelpful: mostHelpful,
    }
  }

  getAvg(key) {
    return this.props.reviews.map(r => r[key]).reduce((memo, s) => {
      return memo + s;
    }) / this.props.reviews.length;
  }

  render() {
    this.getStats();
    return (
      <div>
        <div id="overview">
          <h2>{(Math.round(this.stats.avgs.stars * 10) / 10).toFixed(1)}</h2>
          <div>starbar ({this.stats.n})</div>
        </div>
        <button id="writeReview">Write a Review</button>
        <Snapshot n={this.stats.n} starHist={this.stats.starHist}/>
        <div>
          <StarBar pct={72}/>
        </div>
        <div>Most Helpful</div>
      </div>
    );
  }
}

export default Summary;