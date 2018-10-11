import React, { Component } from 'react';
import '../App.css';
import Donation from './Donation';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const Container = styled(Wrapper)`
  width: 100%;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getData = async () =>
    await (await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
    ))
      .json()
      .then(data => {
        const drinkNames = data.drinks.map(drink => drink.strDrink);
        console.log(drinkNames);
        this.setState({ data: drinkNames });
      });

  componentWillMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <Wrapper className="App">
          <header className="App-header">
            <Donation data={data} height="10" />
          </header>
        </Wrapper>
      </Container>
    );
  }
}

export default App;
