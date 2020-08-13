import React from 'react';
import styled from 'styled-components';
import LabelledBar from './LabelledBar.jsx';

var Styled = styled.div`
`

var labelKey = {
  'value': 'Value for money',
  'quality': 'Product Quality',
  'appearance': 'Appearance',
  'ease': 'Ease of assembly/installation',
  'expected': 'Works as expected',
}

var Averages = (props) => (
  <Styled>
    <div className="header">Average Customer Ratings</div>
    <LabelledBar type={'star'} label='Overall' score={props.avgs.stars} />
    {Object.keys(props.avgs).filter(k => k !== 'stars').map(k => {
      return <LabelledBar type={'tick'} label={labelKey[k]} score={props.avgs[k]} />
    })}
  </Styled>
);

export default Averages;