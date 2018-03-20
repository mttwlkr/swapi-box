import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from './Nav.js';

describe('Nav', () => {

  it('should render without crashing', () => {
    shallow(<Nav />)  
  })

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<Nav />)
    expect(wrapper).toMatchSnapshot()
  })
})
