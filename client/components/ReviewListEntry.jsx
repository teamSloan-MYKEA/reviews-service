import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import TickBar from './TickBar.jsx';

var Styled = styled.div`
  border-top: 2px dotted lightgray;
  margin-top: 20px;
  font-size: 12px;

  #score-name-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .starbar {
    margin-right: 10px;
  }

  #dot {
    margin: 0 10px;
  }

  #header {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .recommend {
    margin: 20px 0;
  }
`

var labelKey = {
  'value': 'Value for money',
  'quality': 'Product Quality',
  'appearance': 'Appearance',
  'ease': 'Ease of assembly/installation',
  'expected': 'Works as expected',
}

var Recommend = (props)  => {
  if (props.stars > 2) {
    return (
      <div className="recommend">&#10003; <strong>Yes</strong>, I recommend this product.</div>
    );
  } else {
    return (
      <div className="recommend">&#10006; <strong>No</strong>, I do not recommend this product.</div>
    );
  }
}

var ReviewListEntry = (props) => {
  var date = props.review.date === '' ?
    '' :
    new Date(props.review.date).toDateString();

  var recommend = props.review.stars > 2 ?
    '&#9733; Yes, I recommend this product.' :
    '&#10006; No, I do not recommend this product.';
  return (
    <Styled>
      <div id="score-name-date">
        <StarBar score={props.review.stars} />
        <div id="name">{props.review.user}</div>
        <div id="dot">&middot;</div>
        <div id="date"><i>{date}</i></div>
      </div>
      <div id="header">{props.review.head}</div>
      <div id="body">{props.review.body}</div>
      <Recommend stars={props.review.stars} />
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