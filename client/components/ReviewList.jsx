import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';

var StyledReviewList = styled.div`
  width: 450px;
`

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledReviewList>
        {this.props.reviews.slice(0, 10).map((r, i) => {
          return <ReviewListEntry key={i} review={r} />
        })}
      </StyledReviewList>
    );
  }
}

export default ReviewList;