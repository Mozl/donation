import React from 'react';
import ReactDOM from 'react-dom';
import Donation from '../components/Donation';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const props = { data: 'mockData' };
  const tree = renderer.create(<Donation {...props} />);
  expect(tree).toMatchSnapshot();
});
