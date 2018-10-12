import React from 'react';
import ReactDOM from 'react-dom';
import MastHead from '../components/MastHead';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MastHead />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = renderer.create(<MastHead />);
  expect(tree).toMatchSnapshot();
});

it('renders logo image', () => {
  const masthead = shallow(<MastHead />);
  const logoImage =
    'https://www.jg-cdn.com/chrome/3e7a4dc9d866fda15331414a9072da97.svg';
  expect(masthead.find('img').prop('src')).toEqual(logoImage);
});
