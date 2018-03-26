import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll.js';
import { mockCleanFilmData } from '../../cleaners/mocks.js';

describe('Scroll', () => {

  it('should render without crashing', () => {
    shallow(<Scroll scroll={mockCleanFilmData} />); 
  });

  it('should match the snapshot', () => {
    let wrapper = shallow(<Scroll scroll={mockCleanFilmData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
