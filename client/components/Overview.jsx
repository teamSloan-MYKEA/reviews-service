import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';

var Styled = styled.div`
  margin: 40px 0;

  h1 {
    font-size: 22px;
    margin-bottom: 30px;
  }

  #score {
    margin: 0;
    font-size: 32px;
  }

  #stars {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #header-count {
    margin-left: 10px;
    margin-top: 4px;
  }

  #writeReview {
    font-weight: bold;
    margin: 60px auto 10px auto;
    width: 400px;
    height: 40px;
    border-radius: 20px;
    border-width: 0;
  }
`

var Overview = (props) => {
  return (
    <Styled>
      <h1>Reviews</h1>
      <h2 id="score">{(Math.round(props.stats.avgs.stars * 10) / 10).toFixed(1)}</h2>
          <div id="stars">
            <StarBar score={props.stats.avgs.stars}/>
            <div id="header-count">({props.stats.n})</div>
          </div>
      <button id="writeReview">Write a Review</button>
    </Styled>
  );
}

export default Overview;