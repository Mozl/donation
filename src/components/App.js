import React, { Component } from 'react';
import Donation from './Donation';
import styled from 'styled-components';
import MastHead from './MastHead';
import { getDonationData } from '../dataRequest';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .h1 {
    margin-top: 0.5rem;
    position: absolute;
  }
`;

const DonationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getDonationData().then(res => {
      this.setState({ data: res.donations });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Wrapper>
        <MastHead />
        <h1>Recent Oxfam Donors</h1>
        <DonationWrapper>
          <Donation data={data} />
        </DonationWrapper>
      </Wrapper>
    );
  }
}

export default App;
