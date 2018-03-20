import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroll from './Scroll.js';

describe('Scroll', () => {

  it('should render without crashing', () => {
    shallow(<Scroll />)  
  })

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<Scroll />)
    expect(wrapper).toMatchSnapshot()
  })
})
