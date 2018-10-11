import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid black;
  width: 10rem;
  height: 10rem;
  text-color: black;
  border-radius: 1.25rem;
`;

class Donation extends Component {
  render() {
    const { data, height } = this.props;
    console.log('props: ', this.props);
    return data.map((item, i) => (
      <Box key={i} data={data} height={height}>
        <p>{data[i]}</p>
      </Box>
    ));
  }
}

export default Donation;
