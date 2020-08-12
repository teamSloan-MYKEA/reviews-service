import React from 'react';
import styled from 'styled-components';

var StarBarStyled = styled.div`
  margin: 10px;
  font-size: 25px;
  height: 30px;
  width: 125px;
  position: relative;
`
var Fill = styled.span`
  color: black;
  padding: 0;
  margin: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  height: 100%;
  width: ${props => props.pct}%;
`

var Empty = styled.span`
  color: lightgray;
  padding: 0;
  margin: 0;
  display: block;
  height: 100%;
`

var StarBar = (props) => {
  return (
    <StarBarStyled>
      <Empty>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Empty>
      <Fill pct={props.pct}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Fill>
    </StarBarStyled>
  );
}

export default StarBar;
