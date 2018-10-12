import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from './__mocks__/getDonationData';

global.fetch = fetch;

configure({ adapter: new Adapter() });
