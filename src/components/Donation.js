import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid black;
  width: 15rem;
  height: 10rem;
  text-color: black;
  border-radius: 1.25rem;
  padding-bottom: 1rem;
  margin: 2rem;
`;

class Donation extends Component {
  render() {
    const { data } = this.props;
    return data.map((item, i) => (
      <Box key={i} data={data}>
        <p>{data[i].donorDisplayName}</p>
        {data[i].amount > 0 && <p>£{data[i].amount}</p>}
        <img alt="donor" src={data[i].imageUrl} height="70" width="70" />
      </Box>
    ));
  }
}

export default Donation;
