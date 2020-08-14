import React from 'react';
import styled from 'styled-components';
import Snapshot from './Snapshot.jsx';
import StarBar from './StarBar.jsx';
import LabelledBar from './LabelledBar.jsx';
import Overview from './Overview.jsx';
import Averages from './Averages.jsx';
import MostHelpful from './MostHelpful.jsx';

var StyledSummary = styled.div`
`

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

    mostHelpful.fav = mostHelpful.fav || mostHelpful.unfav // if data hasn't been fetched yet

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
      <StyledSummary>
        <Overview stats={this.stats}/>
        <Snapshot n={this.stats.n} starHist={this.stats.starHist}/>
        <Averages avgs={this.stats.avgs} />
        <MostHelpful mostHelpful={this.stats.mostHelpful} n={this.stats.n} />
      </StyledSummary>
    );
  }
}

export default Summary;