import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Summary from './components/Summary.jsx';
import ReviewList from './components/ReviewList.jsx';

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
      <div>
        <h1>Reviews</h1>
        <Summary reviews={this.state.reviews}/>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));