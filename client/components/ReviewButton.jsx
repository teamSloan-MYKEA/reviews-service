import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';

var StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: white;
  border-width: 0;
  border-top: solid lightgray 1px;

  #overview {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #reviews {
    font-size: 16px;
  }

  #bar-count {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #count {
    margin-left: 5px;
    margin-bottom: 4px;
  }
`;

var ReviewButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <div id="overview">
        <div id="reviews"><strong>Reviews</strong></div>
        <div id="bar-count">
          <StarBar id="bar" score={props.stats.avgs.stars}/>
          <div id="count">({props.stats.n})</div>
        </div>
      </div>
      <div id="arrow">></div>
    </StyledButton>
  );
}

export default ReviewButton;