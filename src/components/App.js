import React, { Component } from 'react';
import Donation from './Donation';
import styled from 'styled-components';
import MastHead from './MastHead';

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

  getDonationData = () => {
    return fetch(
      `https://api.justgiving.com/beb9b39c/v1/charity/13441/donations`,
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(res => res.json())
      .then(res => {
        const donationData = res.donations;
        this.setState({ data: donationData });
      });
  };

  componentDidMount() {
    this.getDonationData();
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
