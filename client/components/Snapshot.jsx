import React from 'react';
import HistBar from './HistBar.jsx';

var Snapshot = (props) => (
  <div>
    <h3>Rating Snapshot</h3>
    <h3>select a row below to filter reviews.</h3>
    {Object.keys(props.starHist).map((k, i) => {
      return <HistBar key={i}/>
    })}
  </div>
);

export default Snapshot;