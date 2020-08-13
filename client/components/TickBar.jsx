import React from 'react';
import styled from 'styled-components';
import HistBar from './HistBar.jsx';

var BarBorder = styled.div`
  margin: 10px 10px;
  height: 10px;
  width: 38px;
  border-style: solid;
  border-width: 1px;
`
var Fill = styled.div`
  height: 100%;
  width: ${props => props.pct}%;
  background-color: black;
`
var BarContainer = styled.div`
  margin: 10px 10px;
  height: 10px;
  width: 198px;
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
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
      {[...Array(partial).keys().map(i => {
        return <SolidBar key={full} pct={partial} />
      })]}
      {[...Array(empty).keys().map(i => {
        return <SolidBar key={full + i + 1} pct={0} />
      })]}
    </BarContainer>
  );
}

export default TickBar;