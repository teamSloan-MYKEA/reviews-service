import React from 'react';
import styled from 'styled-components';

var BarBorder = styled.div`
  margin: 30px 10px;
  height: 24px;
  width: 200px;
  border-style: solid;
  border-width: 1px;
`
var Fill = styled.div`
  height: 100%;
  width: ${props => props.pct}%;
  background-color: black;
`

var HistBar = (props) => (
  <BarBorder>
    <Fill pct={30}></Fill>
  </BarBorder>
);

export default HistBar;