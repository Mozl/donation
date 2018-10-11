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

  getDonationData = async () =>
    await (await fetch(
      'https://api.justgiving.com/3c847946/v1/charity/18570/donations',
      { headers: { 'Content-Type': 'application/json' } }
    ))
      .json()
      .then(data => {
        const donationData = data.donations;
        this.setState({ data: donationData });
      });

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
