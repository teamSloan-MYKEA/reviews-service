import React from 'react';
import HistBar from './HistBar.jsx';
import styled from 'styled-components';

var Styled = styled.div`
`

var Snapshot = (props) => (
  <Styled>
    <div className="header">Rating Snapshot</div>
    <div className="header">select a row below to filter reviews.</div>
    {Object.entries(props.starHist).reverse().map((p, i) => {
      return <HistBar key={i} pair={p} n={props.n}/>
    })}
  </Styled>
);

export default Snapshot;