import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: 4rem;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  align-items: end;
`;

const Button = styled.button`
  border: 0.1rem solid black;
  margin: 0.8rem;
  border-radius: 10px;
`;

class MastHead extends React.Component {
  render() {
    return (
      <Header>
        <img
          alt="Just Giving"
          src="https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg"
        />
        <ButtonWrapper>
          <Button>About Us</Button>
        </ButtonWrapper>
      </Header>
    );
  }
}
export default MastHead;
