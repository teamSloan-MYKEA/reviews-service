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
  }

  render() {
    return (
      <StyledSummary>
        <Overview stats={this.props.stats}/>
        <Snapshot n={this.props.stats.n} starHist={this.props.stats.starHist}/>
        <Averages avgs={this.props.stats.avgs} />
        <MostHelpful mostHelpful={this.props.stats.mostHelpful} n={this.props.stats.n} />
      </StyledSummary>
    );
  }
}

export default Summary;