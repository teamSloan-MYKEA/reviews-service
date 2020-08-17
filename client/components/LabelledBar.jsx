import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import TickBar from './TickBar.jsx';

var WithLabels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 400px;
  .label {
    width: 200px;
    margin-right: 5px;
  }
  .score {
    margin-left: auto;
  }
`

var LabelledBar = (props) => {
  var Bar = props.type === 'star' ? StarBar : TickBar;
  return (
    <WithLabels>
      <div className="label">{props.label}</div>
      <Bar score={props.score}></Bar>
      <div className="score">{props.score}</div>
    </WithLabels>
  )
}

export default LabelledBar;