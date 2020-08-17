import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Summary from './components/Summary.jsx';
import ReviewList from './components/ReviewList.jsx';
import styled from 'styled-components';

var Styled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  font-family: 'Noto Sans', sans-serif;
  line-height: 1.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
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
    };
  }

  componentDidMount() {
    axios.get('/reviews')
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log('Fetch Error', err);
      });
  }

  render() {
    return (
      <Styled>
        <Summary reviews={this.state.reviews}/>
        <ReviewList reviews={this.state.reviews} />
      </Styled>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));