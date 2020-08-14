import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import TickBar from './TickBar.jsx';

var Styled = styled.div`
  border-top: 2px dotted lightgray;

  #bar {
    width: 100%;
  }
`

var labelKey = {
  'value': 'Value for money',
  'quality': 'Product Quality',
  'appearance': 'Appearance',
  'ease': 'Ease of assembly/installation',
  'expected': 'Works as expected',
}

var ReviewListEntry = (props) => {
  var date = props.review.date === '' ?
    '' :
    new Date(props.review.date).toDateString();
  return (
    <Styled>
      <div id="score-name-date">
        <StarBar score={props.review.stars} />
        <div id="name">{props.review.user}</div>
        <div id="date">{date}</div>
      </div>
      <div id="header">{props.review.head}</div>
      <div id="body">{props.review.body}</div>
      <div id="recommend">recommend</div>
      <div id="scores">
        {Object.keys(labelKey).map((k, i) => {
          return (
            <div id="labelled-bar" key={i}>
              <div id="score-label">{labelKey[k]}</div>
              <TickBar id="bar" score={props.review[k]} />
            </div>
          );
        })}
      </div>
    </Styled>
  );
}

export default ReviewListEntry;