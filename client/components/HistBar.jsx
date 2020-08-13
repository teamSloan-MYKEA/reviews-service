import React from 'react';
import styled from 'styled-components';

var BarBorder = styled.div`
  margin: 10px 10px;
  height: 8px;
  width: 400px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 2px;
`
var Fill = styled.div`
  height: 100%;
  width: ${props => props.pct}%;
  background-color: black;
`

var StyledHistBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`



var HistBar = (props) => {
  var [rating, count] = props.pair;
  var pct = Math.round((count / props.n) * 100);
  return (
    <StyledHistBar>
      <div className="rating">{rating}&#9733;</div>
      <BarBorder>
        <Fill pct={pct}></Fill>
      </BarBorder>
      <div className="count">{count}</div>
    </StyledHistBar>
  )
};

export default HistBar;