import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import getDonationData from '../dataRequest';

const dummyDonationData = [
  { title: 'some-tilte-1', body: 'some-1' },
  { title: 'some-tilte-2', body: 'some-2' },
  { title: 'some-tilte-3', body: 'some-3' }
];
global.fetch = jest.fn(() => Promise.resolve(dummyDonationData));

jest.mock('../dataRequest');

describe('App component', () => {
  describe('when rendered', () => {
    it('should fetch a list of donations', () => {
      getDonationData.mockResolvedValue({ data: {} });
      const getSpy = jest.spyOn(getDonationData, 'getDonationData');
      expect(getSpy).toBeCalled();
    });
  });
});

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});

test('the data is object', () => {
  return getDonationData().then(data => {
    expect(data).toEqual({ data: {} });
  });
});
