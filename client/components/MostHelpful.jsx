import React from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';

var Entry = styled.div`
  width: 50%;

  #name-date {
    display: flex;
    flex-direction: row;
  }

  #review-type {
    margin-bottom: 20px;
  }

  #header {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #body {
    height: 100px;
    overflow: scroll;
  }
`
var Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  width: 450px;
`

var MostHelpfulEntry = (props) => {
  var type = props.review.stars > 3 ? 'Favorable' : 'Critical';
  var date = props.review.date === '' ?
    '' :
    new Date(props.review.date).toDateString();
  return (
    <Entry>
      <div id="review-type">Most Helpful {type} Review</div>
      <StarBar score={props.review.stars} />
      <div id="name-date">
        <div id="name">{props.review.user} &middot; </div>
        <div id="date">{date}</div>
      </div>
      <div id="header">{props.review.head}</div>
      <div id="body">{props.review.body}</div>
      <div id="helpful-rate">
        {props.review.helpful} out of {props.n} people found this helpful
      </div>
    </Entry>
  );
}

var MostHelpful = (props) => {
  return (
    <Container>
      <MostHelpfulEntry review={props.mostHelpful.fav} n={props.n}/>
      <MostHelpfulEntry review={props.mostHelpful.unfav} n={props.n}/>
    </Container>
  );
}

export default MostHelpful;