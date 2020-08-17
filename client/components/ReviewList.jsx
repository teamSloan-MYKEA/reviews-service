import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';

var StyledReviewList = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: left;

  #page-nav {
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #buttons {
    button {
      width: 35px;
      height: 30px;
      border-width: 0;
    }
  }

  #prev {
    margin-right: 5px;
  }
`

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  toShow() {
    var p = this.state.page;
    return this.props.reviews.slice(p*8, (p+1) * 8);
  }

  next() {
    if ((this.state.page+1)*8 > this.props.reviews.length) {
      return
    }
    this.setState({
      page: this.state.page+1
    });
  }

  prev() {
    if (this.state.page === 0) {
      return
    }
    this.setState({
      page: this.state.page-1
    });
  }

  render() {
    var show = this.toShow();
    var p = this.state.page;
    return (
      <StyledReviewList>
        {show.map((r, i) => {
          return <ReviewListEntry key={i} review={r} />
        })}
        <div id="page-nav">
          <div id="displaying">
            {(p*8)+1} - {Math.min(((p+1)*8), this.props.reviews.length)} of {this.props.reviews.length} Reviews
          </div>
          <div id="buttons">
            <button id="prev" onClick={this.prev}>&#9668;</button>
            <button id="next" onClick={this.next}>&#9658;</button>
          </div>
        </div>
      </StyledReviewList>
    );
  }
}

export default ReviewList;