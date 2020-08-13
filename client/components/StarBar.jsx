import React from 'react';
import styled from 'styled-components';

var StarBarStyled = styled.div`
  margin: 10px 10px;
  font-size: 18px;
  height: 30px;
  width: 125px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  var pct = (props.score / 5) * 100
  return (
    <StarBarStyled>
      <Empty>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Empty>
      <Fill pct={pct}>
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </Fill>
    </StarBarStyled>
  );
}

export default StarBar;
