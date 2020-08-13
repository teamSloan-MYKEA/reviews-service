import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import TickBar from './TickBar.jsx';

var WithLabels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  .label {
    width: 100px;
    justify-self: start;
  }
`

var LabelledBar = (props) => {
  var Bar = props.type === 'star' ? StarBar : TickBar;
  return (
    <WithLabels>
      <p className="label">{props.label}</p>
      <Bar score={props.score}></Bar>
      <p className="score">{props.score}</p>
    </WithLabels>
  )
}

export default LabelledBar;