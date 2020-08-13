import React from 'react';
import styled from 'styled-components';
import HistBar from './HistBar.jsx';

var BarBorder = styled.div`
  margin: 0;
  padding: 0;
  height: 8px;
  width: 32px;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`
var Fill = styled.div`
  height: 100%;
  width: ${props => props.pct}%;
  background-color: black;
`
var BarContainer = styled.div`
  margin: 10px 10px;
  height: 10px;
  width: 128;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

var SolidBar = (props) => (
  <BarBorder>
    <Fill pct={props.pct}></Fill>
  </BarBorder>
);


var TickBar = (props) => {
  var full = Math.floor(props.score);
  var partial = (props.score - full) * 100;
  var empty = 5 - Math.ceil(props.score);
  return (
    <BarContainer>
      {[...Array(full).keys()].map(i => {
        return <SolidBar key={i} pct={100} />
      })}
      <SolidBar key={full} pct={partial} />
      {[...Array(empty).keys()].map(i => {
        return <SolidBar key={full + i + 1} pct={0} />
      })}
    </BarContainer>
  );
}

export default TickBar;