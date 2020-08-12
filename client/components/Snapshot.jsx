import React from 'react';
import HistBar from './HistBar.jsx';

var Snapshot = (props) => (
  <div>
    <h3>Rating Snapshot</h3>
    <h3>select a row below to filter reviews.</h3>
    {Object.entries(props.starHist).map((p, i) => {
      return <HistBar key={i} pair={p} n={props.n}/>
    })}
  </div>
);

export default Snapshot;