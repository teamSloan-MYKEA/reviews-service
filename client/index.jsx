import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Summary from './components/Summary.jsx';
import ReviewList from './components/ReviewList.jsx';
import ReviewButton from './components/ReviewButton.jsx';
import styled from 'styled-components';
import stats from './stats.js';

var Modal = styled.div`
  display: none;
  flex-direction: column;
  align-content: center;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
  background-color: white;
`

var ModalContent = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 95%;
  overflow: scroll;
`

var Sticky = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: sticky;

  button {
    font-size: 18px;
    background-color: white;
    border-width: 0;
    margin: 20px 20px;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          user: '',
          date: '',
          head: '',
          body: '',
          stars: 0,
          value: 0,
          quality: 0,
          appearance: 0,
          expected: 0,
          ease: 0,
          helpful: 0,
          unhelpful: 0
        }
      ]
    }

    this.stats = {};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    console.log('review component mounted');
    axios.get(`reviews${window.location.pathname}`)
      .then((res) => {
        console.log('reviews res data', res.data);
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log('Fetch Error', err);
      });
  }

  open() {
    var modal = document.getElementById("modal");

    modal.style.display = "flex";
  }

  close() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  render() {
    this.stats = stats.getStats(this.state.reviews);
    return (
      <div id="reviews">
        <ReviewButton id="open" onClick={this.open} stats={this.stats} />
        <Modal id="modal">
          <Sticky>
            <button id="close" onClick={this.close}>&#10005;</button>
          </Sticky>
          <ModalContent>
            <Summary stats={this.stats}/>
            <ReviewList reviews={this.state.reviews} />
          </ModalContent>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));